import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

const { Option } = Select;

const SelectFilter = ({ items }) => {
  const onChangeSelect = () => {};
  return (
    <Select
      placeholder="Choose country"
      mode="tags"
      style={{ width: "100%" }}
      onChange={onChangeSelect}
      tokenSeparators={[","]}
    >
      {items.map((item, index) => {
        return <Option key={`${index.toString() + item}`}>{item}</Option>;
      })}
    </Select>
  );
};

SelectFilter.propTypes = {
  items: PropTypes.array.isRequired
};

export default SelectFilter;
