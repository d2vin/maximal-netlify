'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { DirectionAwareHover } from '../components/ui/direction-aware-hover';

export function DirectionAwareHoverDemo() {
  const imageUrl = '/cool.png';
  return (
    <div className="relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Quantitative Analyst</p>
        <p className="font-normal text-sm">Associate, New York, NY</p>
      </DirectionAwareHover>
    </div>
  );
}
