'use client';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
  {
    title: 'Byron',
    description: 'Byron is a key member of our team.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="byron.jpg"
          alt="Byron"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: 'Nick',
    description: 'Nick is a key member of our team.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img src="nick.jpg" alt="Nick" className="w-full h-full object-cover rounded-md" />
      </div>
    ),
  },
  {
    title: 'Team Investment Philosophy',
    description:
      'Maximal’s balanced portfolio incorporates multiple investment styles that can deliver returns across most risk environments.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white p-6">
        A disciplined, repeatable process is key to portfolio success.
      </div>
    ),
  },
  {
    title: 'Portfolio Composition',
    description: 'Our portfolio provides both appreciation and income.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white p-6 bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))]">
        Our portfolio provides both appreciation and income.
      </div>
    ),
  },
  {
    title: 'Performance Metrics',
    description:
      'Maximal’s Performance is driven by a cross section of stocks.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white p-6 bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))]">
        Maximal’s Performance is driven by a cross section of stocks. Maximal
        has consistently beat its benchmarks.
      </div>
    ),
  },
  {
    title: 'Our Process',
    description:
      'We pursue a multi-factor investing approach, incorporating well-known factors as well as more esoteric ones.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white p-6 bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]">
        We employ the most up-to-date optimization and risk approaches to ensure
        that we maximize the return potential of these factors. We provide a
        final layer of oversight to ensure that the quantitative process has not
        ‘missed’ anything in its recommendations.
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
