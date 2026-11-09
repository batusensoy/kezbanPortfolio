import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedArtwork } from '@/components/home/FeaturedArtwork';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ArtisticSpecialties } from '@/components/home/ArtisticSpecialties';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedArtwork />
      <AboutPreview />
      <ArtisticSpecialties />
      <ContactCTA />
    </>
  );
}

