export const varTap = (scale: number = 0.96) => ({
  scale,
});

export const varHover = (scale: number = 1.04) => ({
  scale,
});

export const transitionTap = () => ({
  type: 'spring',
  stiffness: 400,
  damping: 17,
});
