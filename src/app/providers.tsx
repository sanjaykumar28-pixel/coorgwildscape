import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'motion/react';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>{children}</BrowserRouter>
    </MotionConfig>
  );
}
