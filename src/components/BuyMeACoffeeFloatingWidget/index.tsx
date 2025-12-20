import React from 'react';

const BuyMeACoffeeFloatingWidget: React.FC = () => {
  const handleClick = () => {
    window.open('https://buymeacoffee.com/demonwarriortech', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '15px',
        right: '60px',
        zIndex: 9999,
        cursor: 'pointer',
        backgroundColor: '#9a0e0e',
        color: 'white',
        padding: '12px 16px',
        borderRadius: '50px',
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        border: 'none',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.backgroundColor = '#9a0e0e';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = '#9a0e0e';
      }}
      title="Support me - Buy me a PC part!"
    >
      <span style={{ fontSize: '16px' }}>💻️</span>
      Buy me a PC Part
    </div>
  );
};

export default BuyMeACoffeeFloatingWidget;
