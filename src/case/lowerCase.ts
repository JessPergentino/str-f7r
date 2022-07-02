import isInvalid from '../util/isInvalid';

const lowerCase = (str: string) => {
  if (isInvalid(str)) return '';

  return str.toLowerCase();
};

export default lowerCase;
