// ============================================================
// Gabrielle Chase Media — Asset Data Layer
// All assets sourced from @gabriellechasemedia Instagram
// Filename suffixes (_portrait / _landscape) define aspect ratios
// ============================================================

// --- STATIC IMAGE IMPORTS (from GRABIELLE-MEDIA) ---
// Images (webp/jpg) — small files, safe to bundle via Vite

// Tutorial / Masterclass previews
import tutorialPreview1Portrait from '../../GRABIELLE-MEDIA/Tutorial-class-preview_portrait.webp';
import tutorialPreview2Portrait from '../../GRABIELLE-MEDIA/Tutorial-class-preview2_portrait.webp';
import tutorialPreview3Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview3_landscape.webp';
import tutorialPreview4Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview4_landscape.webp';
import tutorialPreview5Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview5_landscape.webp';
import tutorialPreview6Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview6_landscape.webp';
import tutorialPreview7Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview7_landscape.webp';
import tutorialPreview8Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview8_landscape.webp';
import tutorialPreview10Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview10_landscape.webp';
import tutorialPreview11Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview11_landscape.webp';
import tutorialPreview12Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview12_landscape.webp';
import tutorialPreview99Landscape from '../../GRABIELLE-MEDIA/Tutorial-class-preview99_landscape.webp';

// Awards & team
import awardsStudents1Portrait from '../../GRABIELLE-MEDIA/awards-to-students_portrait.webp';
import awardsStudents2Portrait from '../../GRABIELLE-MEDIA/awards-to-students2_portrait.webp';

// Crew photo
import crewLandscape from '../../GRABIELLE-MEDIA/crew_landscape.jpg';

// Movie preview
import moviePreviewPortrait from '../../GRABIELLE-MEDIA/movie-preview_portrait.webp';

// --- VIDEO REFERENCES ---
// Videos are large files; we import them so Vite handles the URL resolution
import heroVideoHowManyTimes from '../../GRABIELLE-MEDIA/Art direction and Set design for “How Many Times” video production @djbign ft @ayrastarr_Scene-we-created_landscape.mp4';
import heroVideoRemaCharm from '../../GRABIELLE-MEDIA/BTS- @heisrema CHARM official music video 🥁🔥Production design- @gabriellechasemedia Lead Art d-Scene-we-created_landscape.mp4';
import heroVideoCkayNwayi from '../../GRABIELLE-MEDIA/BTS- We created magic with the @ckay_yo NWAYI music video✨✨We are committed  to excellence 👌🏻P-scene-we-created_landscape.mp4';
import videoAstalavista from '../../GRABIELLE-MEDIA/Enjoy the transformational process of art creation  for the making of the ASTALAVISTA MUSIC VIDEO_scene-we-created_portriat.mp4';
import videoTheWait from '../../GRABIELLE-MEDIA/Everybody is waiting for something.  I art directed The movie “The Wait” by my biggest cheerlead-our-movie5_landscape.mp4';
import videoOverTheBridge from '../../GRABIELLE-MEDIA/From vision to screen!The movie that brought my AMVCA is now about to hit the cinemas.Over The B-our-movie7_landscape.mp4';
import videoHildaBaci3D from '../../GRABIELLE-MEDIA/Here is the 3D of @hildabacicookathon set design done by @gabriellechasemedia Reposted from @hil_scene-we-created-Version1_landscape.mp4';
import videoLFA from '../../GRABIELLE-MEDIA/LFA IS COMING!ART DIRECTION FOR FILM BY US-scene-we-created_Portriat.mp4';
import videoMsKanyin from '../../GRABIELLE-MEDIA/Ms KANYIN CREW LISTExecutive Producer - nineyardExecutive Producer - BB SasoreDirector - DOP- @o_our-movie8_landscape.mp4';
import videoHouseOfGaa from '../../GRABIELLE-MEDIA/NEW PROJECT ALERT 🔥 Power. Betrayal. Legacy. The legend of Bashorun Ga’a, the man who held the_our-movie9_portrait.mp4';
import videoItHappenedAgain from '../../GRABIELLE-MEDIA/Official  trailer for “IT HAPPENED AGAIN” !  Art direction done by our lead Art director @bizzol-our-movie_landscape.mp4';
import videoAllsFairInLove from '../../GRABIELLE-MEDIA/Our-movie4_AllsFairInLove_landscape.mp4';
import videoTheHerd from '../../GRABIELLE-MEDIA/THE HERD.A raw, unflinching story of love, survive_Our-movie_landscape.mp4';
import videoHildaBaciBTS from '../../GRABIELLE-MEDIA/The official set design BTS  of @hildabacicookathon @hildabaci done by  @gabriellechasemedia 😊🐮-scene-we-created-Version1.mp4';
import videoTutorialClass from '../../GRABIELLE-MEDIA/Tutorial-class-main-view_landscape.mp4';
import videoTutorialAd from '../../GRABIELLE-MEDIA/Tutorial_ad-Mastery-of-Art_Direction_portrait.mp4';
import videoEyimofe from '../../GRABIELLE-MEDIA/We brag differently. EYIMOFE Thisismydesire artdirectionbygabriellechasemedia-Our-movie10_portrait.mp4';
import videoLaFemmeAnjola from '../../GRABIELLE-MEDIA/We made a film with love and compassion. This one is definitely close to our hearts. lafemmeanjo-Our-movie11_Portrait.mp4';
import videoFindingDiana from '../../GRABIELLE-MEDIA/What is the truth Discover Diana’s mission and unravel the truth in our new short film ‘Finding_Our-movie12_landscape.mp4';
import videoHouseOfGaaBTS from '../../GRABIELLE-MEDIA/When you put in value, success will find you ⭐️ The production of House of Ga’a is a mixture of_Our-movie13_landscape.mp4';
import videoSceneCreated2 from '../../GRABIELLE-MEDIA/scene-we-created2_landscape.mp4';
import videoSceneCreated3 from '../../GRABIELLE-MEDIA/scene-we-created3_landscape.mp4';
import videoSceneCreated from '../../GRABIELLE-MEDIA/scene-we-created_landscape.mp4';
import videoWhatWeDo2 from '../../GRABIELLE-MEDIA/what-we-do2_portrait.mp4';

// Duplicate videos with shorter names
import videoMovie1 from '../../GRABIELLE-MEDIA/our-movie1_landscape.mp4';
import videoMovie2 from '../../GRABIELLE-MEDIA/our-movie2_landscape.mp4';
import videoMovie3 from '../../GRABIELLE-MEDIA/our-movie3_landscape.mp4';

// --- LOGO IMPORTS ---
import logoLight from './GCM-logo_light.png';
import logoDark from './GCM-logo_dark.png';

export { logoLight, logoDark };

// ============================================================
// TYPE DEFINITIONS
// ============================================================

export type AspectRatio = 'portrait' | 'landscape' | 'square' | 'wide-aspect-ratio';

export interface MediaAsset {
  src: string;
  aspect: AspectRatio;
  alt: string;
  category: 'film' | 'set-design' | 'event' | 'tutorial' | 'general';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Film & TV' | 'Set Design';
  year: string;
  role: string;
  platform?: string;
  image: string;
  aspect: AspectRatio;
  description?: string;
  video?: string;
}

export interface FilmProject {
  id: string;
  title: string;
  platform: string;
  role: string;
  year?: string;
  note?: string;
  image: string;
  video?: string;
  aspect: AspectRatio;
  award?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface AwardEntry {
  id: string;
  title: string;
  category: string;
  project: string;
  platform: string;
  year: string;
  description?: string;
}

// ============================================================
// LOADER IMAGES (for entrance flash animation)
// ============================================================
export const loaderImages: string[] = [
  tutorialPreview5Landscape,
  moviePreviewPortrait,
  tutorialPreview3Landscape,
  crewLandscape,
];

// ============================================================
// GALLERY IMAGES (for ArtDirScroll grid + general use)
// With aspect ratio metadata
// ============================================================
export const galleryImages: string[] = [
  tutorialPreview1Portrait,
  tutorialPreview3Landscape,
  tutorialPreview4Landscape,
  tutorialPreview5Landscape,
  tutorialPreview6Landscape,
  tutorialPreview7Landscape,
  tutorialPreview8Landscape,
  tutorialPreview10Landscape,
  tutorialPreview11Landscape,
  tutorialPreview12Landscape,
  tutorialPreview99Landscape,
  tutorialPreview2Portrait,
  awardsStudents1Portrait,
  awardsStudents2Portrait,
  crewLandscape,
  moviePreviewPortrait,
];

export const galleryAspects: AspectRatio[] = [
  'portrait',  // tutorialPreview1
  'landscape', // tutorialPreview3
  'landscape', // tutorialPreview4
  'landscape', // tutorialPreview5
  'landscape', // tutorialPreview6
  'landscape', // tutorialPreview7
  'landscape', // tutorialPreview8
  'landscape', // tutorialPreview10
  'landscape', // tutorialPreview11
  'landscape', // tutorialPreview12
  'landscape', // tutorialPreview99
  'portrait',  // tutorialPreview2
  'portrait',  // awardsStudents1
  'portrait',  // awardsStudents2
  'landscape', // crew
  'portrait',  // moviePreview
];

// ============================================================
// HERO VIDEOS (for background hero sections)
// ============================================================
export const heroVideos: string[] = [
  heroVideoHowManyTimes,
  heroVideoRemaCharm,
  heroVideoCkayNwayi,
];

// ============================================================
// ALL VIDEOS (organized by content type)
// ============================================================
export const sceneVideos = {
  howManyTimes: { src: heroVideoHowManyTimes, aspect: 'landscape' as AspectRatio },
  remaCharm: { src: heroVideoRemaCharm, aspect: 'landscape' as AspectRatio },
  ckayNwayi: { src: heroVideoCkayNwayi, aspect: 'landscape' as AspectRatio },
  astalavista: { src: videoAstalavista, aspect: 'portrait' as AspectRatio },
  hildaBaci3D: { src: videoHildaBaci3D, aspect: 'landscape' as AspectRatio },
  hildaBaciBTS: { src: videoHildaBaciBTS, aspect: 'landscape' as AspectRatio },
  lfa: { src: videoLFA, aspect: 'portrait' as AspectRatio },
  sceneCreated: { src: videoSceneCreated, aspect: 'landscape' as AspectRatio },
  sceneCreated2: { src: videoSceneCreated2, aspect: 'landscape' as AspectRatio },
  sceneCreated3: { src: videoSceneCreated3, aspect: 'landscape' as AspectRatio },
  whatWeDo2: { src: videoWhatWeDo2, aspect: 'portrait' as AspectRatio },
};

export const movieVideos = {
  theWait: { src: videoTheWait, aspect: 'landscape' as AspectRatio },
  overTheBridge: { src: videoOverTheBridge, aspect: 'landscape' as AspectRatio },
  msKanyin: { src: videoMsKanyin, aspect: 'landscape' as AspectRatio },
  houseOfGaa: { src: videoHouseOfGaa, aspect: 'portrait' as AspectRatio },
  itHappenedAgain: { src: videoItHappenedAgain, aspect: 'landscape' as AspectRatio },
  allsFairInLove: { src: videoAllsFairInLove, aspect: 'landscape' as AspectRatio },
  theHerd: { src: videoTheHerd, aspect: 'landscape' as AspectRatio },
  eyimofe: { src: videoEyimofe, aspect: 'portrait' as AspectRatio },
  laFemmeAnjola: { src: videoLaFemmeAnjola, aspect: 'portrait' as AspectRatio },
  findingDiana: { src: videoFindingDiana, aspect: 'landscape' as AspectRatio },
  houseOfGaaBTS: { src: videoHouseOfGaaBTS, aspect: 'landscape' as AspectRatio },
  movie1: { src: videoMovie1, aspect: 'landscape' as AspectRatio },
  movie2: { src: videoMovie2, aspect: 'landscape' as AspectRatio },
  movie3: { src: videoMovie3, aspect: 'landscape' as AspectRatio },
};

export const tutorialVideos = {
  mainView: { src: videoTutorialClass, aspect: 'landscape' as AspectRatio },
  ad: { src: videoTutorialAd, aspect: 'portrait' as AspectRatio },
};

// ============================================================
// FILM & TV PROJECTS (for Film & TV page)
// ============================================================
export const filmTvProjects: FilmProject[] = [
  {
    id: 'house-of-gaa',
    title: "HOUSE OF GA'A",
    platform: 'Netflix',
    role: 'Art Director',
    year: '2024',
    image: tutorialPreview5Landscape,
    video: videoHouseOfGaa,
    aspect: 'portrait',
    award: 'AMVCA10 Winner — Best Art Director',
  },
  {
    id: 'blood-sisters',
    title: 'BLOOD SISTERS',
    platform: 'Netflix',
    role: 'Art Director',
    year: '2022',
    image: tutorialPreview3Landscape,
    video: videoSceneCreated2, // Aliased to a BTS video
    aspect: 'landscape',
  },
  {
    id: 'the-wait',
    title: 'THE WAIT',
    platform: 'Netflix',
    role: 'Art Director',
    year: '2023',
    image: tutorialPreview4Landscape,
    video: videoTheWait,
    aspect: 'landscape',
  },
  {
    id: 'far-from-home',
    title: 'FAR FROM HOME',
    platform: 'Netflix',
    role: 'Production Designer',
    year: '2022',
    image: tutorialPreview7Landscape,
    video: videoSceneCreated3, // Aliased cinematic video
    aspect: 'landscape',
  },
  {
    id: 'eyimofe',
    title: 'EYIMOFE',
    platform: 'HBO',
    role: 'Art Director',
    year: '2020',
    image: tutorialPreview6Landscape,
    video: videoEyimofe,
    aspect: 'portrait',
  },
  {
    id: 'la-femme-anjola',
    title: 'LA FEMME ANJOLA',
    platform: 'Amazon Prime',
    role: 'Art Director',
    year: '2021',
    image: tutorialPreview8Landscape,
    video: videoLaFemmeAnjola,
    aspect: 'portrait',
  },
  {
    id: 'orah',
    title: 'ORAH',
    platform: 'Toronto International Film Festival 2023',
    role: 'Production Designer',
    year: '2023',
    image: tutorialPreview10Landscape,
    video: videoMovie2, // Cinematic video
    aspect: 'landscape',
  },
  {
    id: 'king-of-boys',
    title: 'KING OF BOYS',
    platform: '',
    role: 'Art Director',
    year: '2018',
    image: tutorialPreview12Landscape,
    video: videoTheHerd, // Aliased cinematic video
    aspect: 'landscape',
  },
  {
    id: 'we-dont-live-here',
    title: "WE DON'T LIVE HERE ANYMORE",
    platform: '',
    role: 'Art Director',
    year: '2023',
    image: tutorialPreview99Landscape,
    video: videoAllsFairInLove, // Aliased cinematic video
    aspect: 'landscape',
  },
  {
    id: 'style-magnate',
    title: 'STYLE MAGNATE',
    platform: 'Showmax',
    role: 'Creator & Executive Producer',
    year: '2024',
    image: tutorialPreview11Landscape,
    video: videoTutorialAd,
    aspect: 'landscape',
    note: '20 designers. ₦100M prize. Nigeria\'s most prestigious fashion competition.',
    award: 'AMVCA11 Nominated — Best Unscripted Series',
  },
];

// ============================================================
// PORTFOLIO ITEMS (for Work page masonry grid)
// ============================================================
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: "House of Ga'a — Set Design",
    category: 'Set Design',
    year: '2024',
    role: 'Art Director',
    platform: 'Netflix',
    image: tutorialPreview5Landscape,
    aspect: 'landscape',
    video: videoHouseOfGaaBTS,
  },
  {
    id: 'p2',
    title: 'Blood Sisters — Art Direction',
    category: 'Film & TV',
    year: '2022',
    role: 'Art Director',
    platform: 'Netflix',
    image: tutorialPreview3Landscape,
    aspect: 'landscape',
    video: videoSceneCreated,
  },
  {
    id: 'p6',
    title: 'Eyimofe (This Is My Desire)',
    category: 'Film & TV',
    year: '2020',
    role: 'Art Director',
    platform: 'HBO',
    image: tutorialPreview8Landscape,
    aspect: 'landscape',
    video: videoEyimofe,
  },
  {
    id: 'p9',
    title: 'La Femme Anjola',
    category: 'Film & TV',
    year: '2021',
    role: 'Art Director',
    platform: 'Amazon Prime',
    image: moviePreviewPortrait,
    aspect: 'portrait',
    video: videoLaFemmeAnjola,
  },
  {
    id: 'p11',
    title: 'Over The Bridge',
    category: 'Film & TV',
    year: '2024',
    role: 'Art Director',
    image: tutorialPreview12Landscape,
    aspect: 'landscape',
    video: videoOverTheBridge,
  },
  {
    id: 'p3',
    title: 'Rema — CHARM Music Video',
    category: 'Set Design',
    year: '2024',
    role: 'Production Designer',
    image: tutorialPreview4Landscape,
    aspect: 'landscape',
    video: heroVideoRemaCharm,
  },
  {
    id: 'p4',
    title: 'Hilda Baci Guinness World Record',
    category: 'Set Design',
    year: '2023',
    role: 'Art Director',
    image: tutorialPreview7Landscape,
    aspect: 'landscape',
    video: videoHildaBaci3D,
  },
  {
    id: 'p5',
    title: 'CKay — NWAYI Music Video',
    category: 'Set Design',
    year: '2024',
    role: 'Production Designer',
    image: tutorialPreview6Landscape,
    aspect: 'landscape',
    video: heroVideoCkayNwayi,
  },
  {
    id: 'p7',
    title: 'Astalavista Music Video — Set Design',
    category: 'Set Design',
    year: '2023',
    role: 'Art Director',
    image: tutorialPreview99Landscape,
    aspect: 'landscape', // Changed to landscape for grid consistency
    video: videoAstalavista,
  },
  {
    id: 'p10',
    title: 'DJBigN ft Ayra Starr — How Many Times',
    category: 'Set Design',
    year: '2024',
    role: 'Art Director',
    image: tutorialPreview10Landscape,
    aspect: 'landscape',
    video: heroVideoHowManyTimes,
  },
];

// ============================================================
// TEAM MEMBERS
// ============================================================
export const teamMembers: TeamMember[] = [
  {
    name: 'Abisola Omolade',
    role: 'Founder & CEO',
    image: awardsStudents1Portrait,
  },
  {
    name: 'Gbemileke Peters',
    role: 'Lead Cinematographer',
    image: crewLandscape,
  },
  {
    name: 'Samantha Myers',
    role: 'Event Curator',
    image: awardsStudents2Portrait,
  },
];

// ============================================================
// MILESTONES (for About page timeline)
// ============================================================
export const milestones: Milestone[] = [
  { year: '2015', title: 'Met Film School, UK', description: 'Screenwriting program' },
  { year: '2016', title: 'London Film School', description: 'Business & Art of Television' },
  { year: '2017', title: 'Founded Gabrielle Chase Media', description: 'Lagos, Nigeria' },
  { year: '2020', title: "Art Director: HBO's Eyimofe", description: 'International co-production' },
  { year: '2022', title: "Art Director: Netflix's Blood Sisters", description: 'First Nigerian Netflix Original Series' },
  { year: '2024', title: "Art Director: House of GA'A", description: 'Epic Nollywood period film' },
  { year: '2024', title: 'AMVCA10 Winner', description: 'Best Art Director' },
  { year: '2024', title: 'Executive Producer: Style Magnate', description: 'Showmax fashion competition' },
  { year: '2025', title: 'AMVCA11 Nominated', description: 'Best Unscripted Series' },
  { year: '2023', title: 'Hilda Baci Guinness World Record', description: 'Art Direction for the event' },
];

// ============================================================
// AWARDS & PRESS (for Press page)
// ============================================================
export const awards: AwardEntry[] = [
  {
    id: 'a1',
    title: 'AMVCA10 — Winner',
    category: 'Best Art Director',
    project: "House of GA'A",
    platform: 'Netflix',
    year: '2024',
  },
  {
    id: 'a2',
    title: 'AMVCA11 — Nominated',
    category: 'Best Unscripted Series',
    project: 'Style Magnate',
    platform: 'Showmax',
    year: '2025',
  },
  {
    id: 'a3',
    title: 'Deutsche Welle TV — Featured',
    category: "West Africa's Creative Powerhouse",
    project: 'Art.see.Africa series',
    platform: 'DW TV',
    year: '2023',
  },
  {
    id: 'a4',
    title: 'Toronto International Film Festival 2023',
    category: 'Official Selection',
    project: 'Orah',
    platform: 'TIFF',
    year: '2023',
  },
  {
    id: 'a5',
    title: 'Hilda Baci Guinness World Record Event',
    category: 'Art Direction Credit',
    project: 'Hilda Baci Cook-a-thon',
    platform: '',
    year: '2023',
  },
  {
    id: 'a6',
    title: 'Martell Recognition Feature',
    category: 'Brand Feature',
    project: 'Creative Excellence',
    platform: 'Martell',
    year: '2023',
  },
];

// ============================================================
// SERVICES DATA
// ============================================================
export const services = [
  {
    id: 'production-set-design',
    name: 'Production & Set Design',
    icon: '🪴',
    shortDesc: 'Building worlds from concept to reality',
    description: 'We build worlds. From period-accurate film sets to immersive branded environments, our team brings every visual concept to physical life with surgical precision.',
    deliverables: [
      'Set Construction',
      'Art Direction',
      'Prop Sourcing',
      'Location Scouting',
      'Set Dressing',
      'Visual Concept Development',
    ],
    image: tutorialPreview5Landscape,
    video: videoSceneCreated,
  },
  {
    id: 'tv-film-production',
    name: 'TV & Film Production',
    icon: '🎥',
    shortDesc: 'From script to screen, across global platforms',
    description: 'From script to screen, we handle every stage of production — with credits spanning Netflix, HBO, Amazon Prime, and Showmax.',
    deliverables: [
      'Executive Production',
      'Cinematography',
      'Post-Production Supervision',
      'Show Development',
      'Casting Coordination',
    ],
    image: tutorialPreview3Landscape,
    video: videoMovie1,
  },
];
