import * as React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupButtonDropdown,
} from "reactstrap";

export interface StatSelectorProps {
  staticSelect: boolean;
  stat: string;
}

const stats = [
  "HP",
  "ATK",
  "DEF",
  "HP%",
  "ATK%",
  "DEF%",
  "Elemental Mastery",
  "Energy Recharge%",
  "CRIT Rate%",
  "CRIT DMG%",
];

const StatSelector = ({ staticSelect, stat }: StatSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <InputGroup>
      <InputGroupButtonDropdown
        addonType="prepend"
        isOpen={dropdownOpen}
        toggle={toggleDropDown}
      >
        <DropdownToggle caret>{stat}</DropdownToggle>
        <DropdownMenu>
          {stats.map((item) => (
            <DropdownItem>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </InputGroupButtonDropdown>
      <Input />
    </InputGroup>
  );
};

export default StatSelector;
