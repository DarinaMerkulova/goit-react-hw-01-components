export const getRandomColor = () => {
  const colorList = [
    '#0B2447',
    '#19376D',
    '#576CBC',
    '#A5D7E8',
    '#84A7A1',
    '#84A7A1',
    '#DDE6ED',
    '#526D82',
    '#B9EDDD',
    '#87CBB9',
    '#569DAA',
    '#577D86',
  ];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  const color = colorList[randomIndex];
  return color;
};
