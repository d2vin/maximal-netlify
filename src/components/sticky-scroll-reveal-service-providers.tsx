'use client';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
  {
    title: 'Service Providers',
    description: 'Our trusted partners who help us deliver exceptional value.',
    content: (
      <div className="flex justify-between flex-col h-full w-full text-white p-4 bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))]">
        <p>RFA: Cyber security provider</p>
        <p>SS&C Technologies: Fund administrator</p>
        <p>Goldman Sachs: Broker via Velocity Clearing LLC</p>
        <p>WayStone Compliance Solutions: Compliance services</p>
        <p>Seward & Kissel LLP: Legal representative</p>
      </div>
    ),
  },
  {
    title: 'SS&C Technologies',
    description: 'Fund administrator',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/ssc.jpg"
          alt="SS&C Technologies"
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
  {
    title: 'RFA',
    description: 'Cyber security provider',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/rfa.svg"
          alt="RFA"
          className="h-full w-full object-contain invert"
        />
      </div>
    ),
  },
  {
    title: 'Goldman Sachs',
    description: 'Broker via Velocity Clearing LLC',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/goldman.svg"
          alt="Goldman Sachs"
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
  {
    title: 'WayStone Compliance Solutions',
    description: 'Compliance services',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/waystone.jpg"
          alt="WayStone Compliance Solutions"
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
  {
    title: 'Seward & Kissel LLP',
    description: 'Legal representative',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/seward.jpg"
          alt="Seward & Kissel LLP"
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <>
      <StickyScroll content={content} />
    </>
  );
}
