export const transitionDelay = (delay: number) => {
    if (delay <= 0) return '1s'; // Default to 1s for 1 or lower
    return `${1 + (delay) * 0.3}s`; // Increase by 0.2s for each number above 1
};
