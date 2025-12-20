import React from 'react';

interface BuyMeACoffeeButtonProps {
  className?: string;
}

const BuyMeACoffeeButton: React.FC<BuyMeACoffeeButtonProps> = ({
  className,
}) => {
  return (
    <a
      href="https://www.buymeacoffee.com/demonwarriortech"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '7px 15px',
        backgroundColor: '#9a0e0e',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '8px',
        border: '2px solid #000000',
        fontFamily: 'Cookie, cursive',
        fontSize: '28px',
        fontWeight: 'normal',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <span style={{ marginRight: '8px' }}>💻️</span>
      <span>Buy me a pc part</span>
    </a>
  );
};

export default BuyMeACoffeeButton;
