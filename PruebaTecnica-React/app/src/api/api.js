export const getData = async () => {
  const data = await fetch('http://localhost:8080/entries');
  const dataJson = await data.json();
  return dataJson;
};
