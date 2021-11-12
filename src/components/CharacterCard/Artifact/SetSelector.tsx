import * as React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { updateSet } from "../../../app/features/artifact/artifactSlice";
import { useAppDispatch } from "../../../app/hooks";

export interface SetSelectorProps {
  set: string;
  type: string;
}

const sets = ["Thundering Fury", "Crimson Witch of Flames"];

const SetSelector = (props: SetSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const dispatch = useAppDispatch();

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
      <DropdownToggle caret>{props.set}</DropdownToggle>
      <DropdownMenu>
        {sets.map((item) => (
          <DropdownItem
            onClick={() =>
              dispatch(updateSet({ artifactType: props.type, set: item }))
            }
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SetSelector;
