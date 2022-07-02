import isInvalid from '../util/isInvalid';

const capitalize = (str: string) => {
  if (isInvalid(str)) return '';

  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
};

export default capitalize;
