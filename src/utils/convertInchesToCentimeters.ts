const inTOcm = (inches: number) => {
  return Math.ceil(Number(inches) * 2.54);
};

export default inTOcm;
