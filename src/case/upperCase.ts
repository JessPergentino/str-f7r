import isInvalid from '../util/isInvalid';

const upperCase = (str: string) => {
  if (isInvalid(str)) return '';

  return str.toUpperCase();
};

export default upperCase;
