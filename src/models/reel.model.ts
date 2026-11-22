export type ReelAspectRatio = '16:9' | '9:16';

export type KenBurnsMotion = 'zoom-in' | 'zoom-out' | 'pan-left' | 'pan-right';

export interface ReelScene {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  durationSec: number;
  motion: KenBurnsMotion;
  enabled: boolean;
}

export interface ReelPreset {
  id: string;
  name: string;
  description: string;
  scenes: ReelScene[];
}
