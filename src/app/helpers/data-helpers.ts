export const getRandomItems = (arr: any[], itemLimit: number) =>
  arr.sort(() => Math.random() - 0.5).slice(0, itemLimit);
