import isInvalid from '../util/isInvalid';

const formatCurrency = (locales: string, currency: string, value: number) => {
  if (isInvalid(value)) return '';
  return new Intl.NumberFormat(locales, { style: 'currency', currency }).format(value);
};

export default formatCurrency;
