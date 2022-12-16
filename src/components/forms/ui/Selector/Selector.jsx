import React from "react";
import Select from 'react-select';

const Selector = ({
  dataOptions,
  name,
  selectorId,
  disabled,
  defaultValue,
  labelTxt,
  currentValue,
  isLoading,
  isClearable,
  isSearchable
}) => {

  return (
    <div>
      {labelTxt&& <label htmlFor={name}>{labelTxt}</label> }
       <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={defaultValue}
        isDisabled={disabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        name={name}
        options={dataOptions}
      />
    </div>
  );
};

export default Selector;
