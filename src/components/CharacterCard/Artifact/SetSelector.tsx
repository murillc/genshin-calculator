import * as React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export interface SetSelectorProps {
  set: string;
  changeSet: any;
}

const sets = ["Thundering Fury", "Crimson Witch of Flames"];

const SetSelector = ({ set, changeSet }: SetSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
      <DropdownToggle caret>{set}</DropdownToggle>
      <DropdownMenu>
        {sets.map((item) => (
          <DropdownItem onClick={() => changeSet(item)}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SetSelector;
