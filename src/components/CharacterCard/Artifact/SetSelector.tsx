import * as React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export interface SetSelectorProps {
  set: string;
}

const sets = ["Thundering Fury", "Crimson Witch of Flames"];

const SetSelector = (props: SetSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
      <DropdownToggle caret>{props.set}</DropdownToggle>
      <DropdownMenu>
        {sets.map((item) => (
          <DropdownItem>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SetSelector;
