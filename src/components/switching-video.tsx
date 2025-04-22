import { useEffect, useRef, useState } from 'react';
import '../styles/globals.css';

const videoSources = [
  'iStock-803920034.mp4',
  'iStock-1143211270.mp4',
  'iStock-1341561076.mp4',
  'iStock-1498919348.mp4',
];

export default function SwitchingVideo() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const switchVideo = () => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoSources.length
      );
    };

    const intervalId = setInterval(switchVideo, 8000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).load();
      (videoRef.current as HTMLVideoElement).play();
    }
  }, [currentVideoIndex]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      className="video-fade-in absolute left-12 top-24 w-auto min-h-full min-w-full max-h-[90vh] max-w-none object-cover"
    >
      <source src={videoSources[currentVideoIndex]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
