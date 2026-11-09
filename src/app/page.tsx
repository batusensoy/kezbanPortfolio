import React from 'react';
import { Hero } from '@/components/home/Hero';
import { LatelyInStudio } from '@/components/home/LatelyInStudio';
import { ArtistGreeting } from '@/components/home/ArtistGreeting';
import { WhatIPaint } from '@/components/home/WhatIPaint';
import { ContactInvitation } from '@/components/home/ContactInvitation';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatelyInStudio />
      <ArtistGreeting />
      <WhatIPaint />
      <ContactInvitation />
    </>
  );
}
