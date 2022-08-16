import isInvalid from '../util/isInvalid';

const count = (str: string) => {
  if (isInvalid(str)) return 0;

  return str.length;
};

export default count;
