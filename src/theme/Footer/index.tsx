import React from 'react';
import Footer from '@theme-original/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BuyMeACoffeeFloatingWidget from '@site/src/components/BuyMeACoffeeFloatingWidget';
import DiscordFloatingWidget from '@site/src/components/DiscordFloatingWidget';

export default function FooterWrapper(props) {
  useDocusaurusContext();

  return (
    <>
      <DiscordFloatingWidget />
      <BuyMeACoffeeFloatingWidget />
      <Footer {...props} />
    </>
  );
}
