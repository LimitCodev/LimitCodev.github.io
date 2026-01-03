import { useState, useEffect } from 'react';

export function useInitialAnimation() {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if animation has already been shown in this session
    const animated = sessionStorage.getItem('hasAnimatedHome');
    if (!animated) {
      setIsAnimating(true);
      sessionStorage.setItem('hasAnimatedHome', 'true');
    } else {
      setShouldAnimate(false);
    }
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  return { shouldAnimate, isAnimating, startAnimation };
}