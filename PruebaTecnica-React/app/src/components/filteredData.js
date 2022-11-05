const dataSort = (a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
};

export const filtererdData = (list, word) => {
  const filtered = list.filter((item) => item.programType === word);
  filtered.filter((item) => item.releaseYear >= 2010);
  const maxData = [];
  for (let i = 0; i < 20; i++) {
    maxData.push(filtered[i]);
  }
  return maxData.sort(dataSort);
};
