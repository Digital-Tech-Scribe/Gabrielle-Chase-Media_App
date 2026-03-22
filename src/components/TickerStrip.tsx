import { motion } from 'framer-motion';

interface TickerStripProps {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
}

const TickerStrip = ({ items, speed = 35, separator = '•', className = '' }: TickerStripProps) => {
  // Double the items for seamless looping
  const tickerContent = [...items, ...items, ...items, ...items];
  
  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1.25rem 0',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: 'linear',
        }}
        style={{
          display: 'inline-flex',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {tickerContent.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--accent)', fontSize: '0.6rem' }}>{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TickerStrip;
