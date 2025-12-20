import React from 'react';
import styles from './styles.module.css';

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
      className={className ? `${styles.buyMeACoffeeButton} ${className}` : styles.buyMeACoffeeButton}
    >
      <span
        className={styles.icon}
        role="img"
        aria-label="Computer"
      >
        💻️
      </span>
      <span>Buy me a pc part</span>
    </a>
  );
};

export default BuyMeACoffeeButton;
