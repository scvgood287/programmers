// https://programmers.co.kr/learn/courses/30/lessons/86491

const solution = (sizes) => {
  const sortedSizes = sizes.map(size => size.sort((a, b) => b - a));

  const [largeSize, smallSize] = sortedSizes.reduce(([accLarge, accSmall], [currLarge, currSmall]) => [accLarge < currLarge ? currLarge : accLarge, accSmall < currSmall ? currSmall : accSmall], sortedSizes[0]);

  return largeSize * smallSize;
}