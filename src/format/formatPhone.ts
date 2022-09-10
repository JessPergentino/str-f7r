import isInvalid from '../util/isInvalid';

const formatPhone = (option: number, value: number | string) => {
  const str = value.toString().replace(/[,;:.?!_/-]+/g, '');
  if (isInvalid(str)) return '';

  switch (option) {
    case 0:
      return str;
    //	(##) # ####-####
    case 1:
      return str
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2 ')
        .replace(/(\d{4})(\d)/, '$1-$2');
    //	(##) # #### ####
    case 2:
      return str
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2 ')
        .replace(/(\d{4})(\d)/, '$1 $2');
    //	## # ####-####
    case 3:
      return str
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1 $2 ')
        .replace(/(\d{4})(\d)/, '$1-$2');
    //	## # #### ####
    case 4:
      return str
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1 $2 ')
        .replace(/(\d{4})(\d)/, '$1 $2');
    //	# ####-####
    case 5:
      return str
        .replace(/\D/g, '')
        .replace(/(\d{1})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1-$2');
    //	# #### ####
    case 6:
      return str
        .replace(/\D/g, '')
        .replace(/(\d{1})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2');
    //	+## ## # ####-####
    case 7:
      return str
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{2})/, '+$1 $2 ')
        .replace(/(\d{1})(\d{4})(\d)/, '$1 $2-$3');
    //	+## ## # #### ####
    case 8:
      return str
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{2})/, '+$1 $2 ')
        .replace(/(\d{1})(\d{4})(\d)/, '$1 $2 $3');
    default:
      return '';
  }
};

export default formatPhone;
