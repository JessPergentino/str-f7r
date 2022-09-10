const isInvalid = (value: string | number) => {
  return value === '' || value <= 0 || value === null || value === undefined;
};

export default isInvalid;
