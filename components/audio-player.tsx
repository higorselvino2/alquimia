'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  src: string;
  label?: string;
  variant?: 'before' | 'after';
}

export function AudioPlayer({ src, label, variant = 'before' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Pause all other audios on the page
        document.querySelectorAll('audio').forEach(el => {
           if (el !== audioRef.current) el.pause();
        });
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handlePause = () => setIsPlaying(false);
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('pause', handlePause);
      return () => audio.removeEventListener('pause', handlePause);
    }
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if(audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Allow clicking on the progress bar to seek
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const percentage = x / bounds.width;
      audioRef.current.currentTime = percentage * audioRef.current.duration;
      setProgress(percentage * 100);
    }
  };

  return (
    <div className={cn(
      "w-full bg-black/40 border p-3 rounded-2xl flex items-center gap-4 transition-all duration-300",
      variant === 'after' ? "border-[#FF7A00]/30 shadow-[0_0_20px_rgba(255,122,0,0.05)]" : "border-white/5"
    )}>
      <button 
        onClick={togglePlay}
        className={cn(
          "w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all hover:scale-105",
          variant === 'after' 
            ? "bg-[#FF7A00] text-black shadow-[0_0_15px_rgba(255,122,0,0.3)] hover:shadow-[0_0_20px_rgba(255,122,0,0.5)]" 
            : "bg-white/10 text-white hover:bg-white/20"
        )}
      >
        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
      </button>

      <div className="flex-1 min-w-0 pr-2">
        {label && (
          <p className={cn(
            "text-xs font-bold truncate mb-2",
            variant === 'after' ? "text-white" : "text-white/60"
          )}>
            {label}
          </p>
        )}
        
        <div 
          className={cn(
             "h-1.5 w-full rounded-full cursor-pointer relative overflow-hidden group",
             variant === 'after' ? "bg-[#FF7A00]/20" : "bg-white/10"
          )}
          onClick={handleProgressClick}
        >
          <div 
            className={cn(
              "h-full transition-all duration-100 ease-linear rounded-full",
              variant === 'after' ? "bg-gradient-to-r from-[#E66A00] to-[#FF7A00]" : "bg-white/40"
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />
    </div>
  );
}
