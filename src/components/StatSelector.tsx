import * as React from "react";
import { Component } from "react";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupButtonDropdown,
  Row,
} from "reactstrap";

export interface StatSelectorProps {}

const StatSelector: React.FunctionComponent<StatSelectorProps> = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <InputGroup>
        <InputGroupButtonDropdown
          addonType="prepend"
          isOpen={dropdownOpen}
          toggle={toggleDropDown}
        >
          <DropdownToggle caret>HP</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input />
      </InputGroup>
    </div>
  );
};

export default StatSelector;
