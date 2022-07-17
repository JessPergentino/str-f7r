import isInvalid from '../util/isInvalid';

const titleCase = (str: string) => {
  if (isInvalid(str)) return '';

  const titleCaseString = str
    .toLowerCase()
    .split(' ')
    .map(s => {
      const letterToCapitalize = s.match(/([a-z0-9])|([A-Z])/g)?.[0] || '';
      return s.replace(letterToCapitalize, letterToCapitalize.toUpperCase());
    })
    .join(' ');

  return titleCaseString;
};

export default titleCase;
