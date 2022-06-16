const camelCase = (str: string): string => {
  if (str === '' || str === null || str === undefined) return '';

  let splitString = [];
  let camelCaseString = '';

  if (str.match(/[,;:.?!_/-]+/g)) {
    splitString = str.split(/[ ,;:.?!_/-]+/g).filter(value => value !== '');
  } else {
    splitString = str
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .split(' ')
      .filter(value => value !== '');
  }

  camelCaseString = splitString
    .map((value: string, index: number) => {
      if (index === 0) return value.toLowerCase();
      return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
    })
    .join('');

  return camelCaseString;
};

export default camelCase;
