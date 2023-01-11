import { FC } from "react";

import "./index.scss";

interface SelectInputProps {
  selected: { text: string; value: string };
  setSelected: any;
  options: { text: string; value: string }[];
}

const SelectInput: FC<SelectInputProps> = ({
  selected,
  setSelected,
  options,
  ...rest
}) => {
  return (
    <select
      value={selected.value}
      onChange={(e) => {
        const foundedOption = options.find(
          (item) => item.value === e.target.value
        );
        if (foundedOption) {
          setSelected(foundedOption);
        }
      }}
    >
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
