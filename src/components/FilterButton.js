const FilterCountry = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    const test = e.target.id;
    onSelect(regionName);
    onSelect(test);
  };

  return (
    <select className="bg-dark text-light border-0" onChange={selectHandler}>
      <option className="option" value="/all">
        All Countries
      </option>
      <option className="option" value="/region/africa">
        Africa
      </option>
      <option className="option" value="/region/america">
        America
      </option>
      <option className="option" value="/region/asia">
        Asia
      </option>
      <option className="option" value="/region/europe">
        Europe
      </option>
      <option className="option" value="/region/oceania">
        Oceania
      </option>
    </select>
  );
};

export default FilterCountry;
