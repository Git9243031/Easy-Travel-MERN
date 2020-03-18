import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

const { Option } = Select;

const SelectFilter = ({ onSelectHandler, items }) => {
  const options = items.map((item, index) => {
    return <Option key={`${item}`}>{item}</Option>;
  });

  return (
    <Select
      placeholder="Choose country"
      mode="tags"
      style={{ width: "100%" }}
      onChange={onSelectHandler}
      tokenSeparators={[","]}
      defaultValue={items}
    >
      {options}
    </Select>
  );
};

SelectFilter.propTypes = {
  items: PropTypes.array.isRequired,
  onSelectHandler: PropTypes.func.isRequired
};

export default SelectFilter;
