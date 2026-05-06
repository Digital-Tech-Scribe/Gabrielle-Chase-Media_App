# Gabrielle Chase Media — Codebase Map & Error Fix Plan

> Generated: 2026-04-07
> Build Status: ✅ Clean (`tsc --noEmit` + `npm run build` pass with 0 errors)
> ESLint Status: ✅ Clean (0 errors / 0 warnings)
> IDE Lint Warnings: ⚠️ 55+ warnings (inline styles, accessibility)

---

## 1. Codebase Architecture

```
Gabrielle-Chase-Media_App/
├── index.html                    # Entry HTML — meta tags, fonts
├── vite.config.ts                # Vite config — base path for GH Pages
├── tsconfig.json                 # Root TS config
├── tsconfig.app.json             # App TS config
├── package.json                  # React 19, Framer Motion, React Router
├── eslint.config.js              # ESLint 9 flat config
│
├── src/
│   ├── main.tsx                  # React DOM entry
│   ├── App.tsx                   # Router + Layout (HashRouter)
│   ├── App.css                   # Global container styles
│   ├── index.css                 # Design system: tokens, typography, media queries
│   │
│   ├── assets/
│   │   ├── data.ts               # Central data store (images, videos, project metadata)
│   │   ├── abisola-award.webp    # Founder portrait
│   │   ├── GCM-logo_light.png    # Brand logo (light)
│   │   └── GCM-logo_dark.png     # Brand logo (dark)
│   │
│   ├── components/               # 12 reusable UI components
│   │   ├── ArtDirScroll.tsx      # 3D parallax grid (homepage hero)
│   │   ├── CustomCursor.tsx      # Custom cursor (desktop only)
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Hero.tsx              # Page hero sections
│   │   ├── ImageSlider.tsx       # Horizontal scroll gallery
│   │   ├── Loader.tsx            # Entrance animation
│   │   ├── Navigation.tsx        # Nav bar + mobile menu overlay
│   │   ├── PageTransition.tsx    # Route transition wrapper
│   │   ├── Scroll.tsx            # 3D scroll gallery
│   │   ├── ScrollFadeIn.tsx      # Scroll-triggered fade-in
│   │   ├── ServiceTemplate.tsx   # Service detail page template
│   │   └── TickerStrip.tsx       # Marquee ticker
│   │
│   └── pages/                    # 7 route pages
│       ├── HomePage.tsx          # Landing page
│       ├── AboutPage.tsx         # About / Team
│       ├── ServicesPage.tsx      # Services overview
│       ├── WorkPage.tsx          # Portfolio gallery + lightbox
│       ├── FilmTVPage.tsx        # Film & TV credits
│       ├── ContactPage.tsx       # Contact form
│       ├── StyleMagnate.tsx      # Style Magnate sub-page
│       ├── services/             # Individual service sub-pages
│       └── work/                 # Individual work sub-pages
│
├── GRABIELLE-MEDIA/              # Raw media assets (videos, images)
├── public/                       # Static public assets
├── dist/                         # Production build output
└── scripts/                      # Deployment helpers (GH Pages)
```

### Dependency Graph

```
App.tsx
├── Navigation.tsx (global — all routes)
├── CustomCursor.tsx (global — desktop only)
├── Footer.tsx (global — all routes)
├── PageTransition.tsx (wraps each page)
│
├── HomePage.tsx
│   ├── ArtDirScroll.tsx → data.ts (galleryImages)
│   ├── ImageSlider.tsx → data.ts (sliderItems)
│   ├── ScrollFadeIn.tsx
│   └── data.ts (portfolioItems, services, abisolaAwardPortrait)
│
├── AboutPage.tsx
│   ├── ScrollFadeIn.tsx
│   └── data.ts (teamMembers, milestones, awards, aboutHeroPortrait)
│
├── ServicesPage.tsx
│   └── data.ts (services)
│
├── WorkPage.tsx
│   └── data.ts (portfolioItems)
│
├── FilmTVPage.tsx
│   └── data.ts (filmTvProjects)
│
├── ContactPage.tsx
│   └── data.ts (services — for dropdown)
│
└── StyleMagnate.tsx
    └── data.ts (various)
```

---

## 2. Identified Problems

### Category A: Accessibility Errors (1 issue)

| # | File | Line | Issue | Severity |
|---|------|------|-------|----------|
| A1 | `WorkPage.tsx` | 241 | **Close button has no discernible text** — `<button>` wraps an `<X>` icon with no `aria-label` or `title` attribute. Screen readers see an unlabeled button. | 🔴 Error |

### Category B: Inline Style Warnings (55+ issues)

The IDE flags every JSX `style={{}}` prop as a warning ("CSS inline styles should not be used, move styles to an external CSS file"). This is a **code quality** warning, not a runtime error. These occur across heavily-styled pages:

| # | File | Count | Lines (examples) |
|---|------|-------|-------------------|
| B1 | `FilmTVPage.tsx` | 18 | 28, 31, 32, 35, 41, 57, 59, 68, 77, 99, 100, 101, 103, 119, 124, 126, 131 |
| B2 | `AboutPage.tsx` | 7 | 19, 21, 24, 28, 43, 44, 50 |
| B3 | `HomePage.tsx` | 3 | 20, 26, 28 |
| B4 | `ImageSlider.tsx` | 2 | 29, 30 |
| B5 | `ContactPage.tsx` | ~8 | Various layout/form style props |
| B6 | `WorkPage.tsx` | ~8 | Lightbox modal, masonry grid items |
| B7 | `ServicesPage.tsx` | ~4 | Grid layout, section styles |
| B8 | `StyleMagnate.tsx` | ~5 | Video player, detail grid |

> **Note**: Every component and every page uses inline Framer Motion `style` props because Framer Motion's animation system (`motion.div style={{}}`) requires runtime-evaluated CSS values for animation. Only **non-animated, static** inline styles should be extracted.

---

## 3. Fix Plan

### Phase 1: Accessibility Fix (A1) — Single Change

**File**: `src/pages/WorkPage.tsx`
**Fix**: Add `aria-label="Close"` to the lightbox close button at line 241.

```diff
  <button
    onClick={closeModal}
+   aria-label="Close"
    style={{
```

**Effort**: 1 line change.

---

### Phase 2: Extract Static Inline Styles to CSS Classes

**Strategy**: Only extract **static** (non-animated, non-conditional) inline styles to `index.css` or component-specific CSS classes. Leave Framer Motion `style` props and conditionals (`isDesktop ? x : y`) as inline — they must remain in JSX.

#### Phase 2A: Create CSS classes in `index.css`

Add a new section at the bottom of `index.css` with reusable utility classes:

```css
/* ============================================
   COMPONENT UTILITY CLASSES
   ============================================ */

/* Layout */
.section-dark      { background-color: #050505; }
.section-darker    { background-color: #0D0D0D; }
.pos-relative      { position: relative; }
.overflow-hidden   { overflow: hidden; }

/* Gradient overlays */
.gradient-fade-top {
  position: absolute; inset: 0;
  background: linear-gradient(to top, var(--bg-primary) 0%, transparent 40%);
  pointer-events: none;
}
.gradient-fade-bottom {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, var(--bg-primary) 0%, transparent 40%);
  pointer-events: none;
}

/* Lightbox */
.lightbox-overlay {
  position: fixed; inset: 0; z-index: 9999;
  display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,0.95);
}
.lightbox-close {
  position: absolute; top: 1.5rem; right: 1.5rem;
  width: 48px; height: 48px; border-radius: 50%;
  background: rgba(0,0,0,0.7); color: #fff;
  border: none; display: flex;
  align-items: center; justify-content: center;
  cursor: pointer; z-index: 10;
}

/* Film TV cards */
.filmtv-card {
  border-radius: 8px; overflow: hidden;
  background: #111; border: 1px solid rgba(255,255,255,0.05);
}
.filmtv-card-details {
  padding: 1.5rem; display: flex;
  flex-direction: column; gap: 0.3rem;
}

/* Contact */
.contact-form-field {
  width: 100%; padding: 1rem;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 4px; color: #fff;
  font-size: 1rem;
}
```

#### Phase 2B: Replace inline styles in each file

| File | Static styles to extract | Conditional styles (KEEP inline) |
|------|-------------------------|----------------------------------|
| `FilmTVPage.tsx` | Card container, details padding, badge styles, gradient overlays | `isDesktop` ternaries, scroll progress transforms |
| `AboutPage.tsx` | Section backgrounds, gradient overlay, name/title positioning | `isDesktop` font size/height ternaries |
| `HomePage.tsx` | Section backgrounds, portfolio card base styles | `isDesktop` grid/spacing ternaries |
| `WorkPage.tsx` | Lightbox overlay, close button, masonry container | `isDesktop` column ternaries, modal content layout |
| `ContactPage.tsx` | Form field base styles, label styles | `isDesktop` grid/layout ternaries |
| `ImageSlider.tsx` | Sticky container, title positioning | `isDesktop` ternaries for size/position |
| `ServicesPage.tsx` | Section padding, dividers | `isDesktop` grid switching |
| `StyleMagnate.tsx` | Video section, play button | `isDesktop` size ternaries |

**Effort**: ~2-3 hours of refactoring. Does not change any visual output.

---

### Phase 3: Verification

1. **TypeScript**: `npx tsc --noEmit` — must remain clean
2. **ESLint**: `npx eslint src/` — must remain clean
3. **Build**: `npm run build` — must succeed
4. **Visual regression**: Browser test at 375px and 1440px to confirm no visual changes
5. **Accessibility**: Verify close button is now labeled via screen reader testing

---

## 4. Priority & Recommendation

| Priority | Phase | Impact | Effort |
|----------|-------|--------|--------|
| 🔴 **P0** | Phase 1 (A11y fix) | Fixes real accessibility bug | 1 minute |
| 🟡 **P1** | Phase 2 (Extract styles) | Code quality / maintainability | 2-3 hours |

**Recommendation**: Fix Phase 1 immediately. Phase 2 is a code hygiene improvement that has zero user-facing impact — schedule it as a tech debt cleanup when convenient. The inline styles don't cause runtime errors or visual bugs.
