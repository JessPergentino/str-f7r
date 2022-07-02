const capitalize = (str: string) => {
  if (str === '' || str === null || str === undefined) return '';

  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
};

export default capitalize;
