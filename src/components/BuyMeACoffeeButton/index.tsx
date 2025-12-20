import React from 'react';

interface BuyMeACoffeeButtonProps {
  className?: string;
}

const BuyMeACoffeeButton: React.FC<BuyMeACoffeeButtonProps> = ({
  className,
}) => {
  return (
    <a href="https://buymeacoffee.com/demonwarriortech" className={className}>
      <img src="/img/buymeacoffee-button.png" alt="Buy me pc parts" />
    </a>
  );
};

export default BuyMeACoffeeButton;
