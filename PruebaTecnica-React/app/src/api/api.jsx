export const getData = async () => {
  try {
    const data = await fetch('http://localhost:8080/entries');
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    return false;
  }
};
