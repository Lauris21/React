import { useState } from 'react';

const FilterYear = ({ list }) => {
  const [filter, setFilter] = useState();
  const filteredYear = [];
  const handleOnChange = (e) => {
    // eslint-disable-next-line no-const-assign
    setFilter = e.target.value;
    if (filter === '') {
    }
    const year = list.filter((item) => item.releaseYear);
    for (const elem of year) {
      if (!filteredYear.includes(elem.releaseYear)) {
        filteredYear.push(elem.releaseYear);
      }
    }
    console.log(filteredYear);
  };

  return <></>;
};

export default FilterYear;
