export const getSpecificItems = (array, item) => {
  const findItem = obj => {
    if (typeof item === 'string') return obj[item];

    let currentObj = obj;

    item.forEach(itemInArray => {
      currentObj = currentObj[itemInArray];
    });

    return currentObj;
  };

  return array.reduce((acc, current) => {
    const item = findItem(current);

    if (!acc.includes(item)) {
      return [...acc, item];
    }

    return acc;
  }, []);
};

export const createObjectArrayFromStringArray = (array, key) =>
  array.map(item => {
    return { [key]: item };
  });
