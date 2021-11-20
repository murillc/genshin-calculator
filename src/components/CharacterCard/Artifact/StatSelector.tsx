import * as React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupButtonDropdown,
} from "reactstrap";
import artifactSlice, {
  updateStatType,
  updateStat,
} from "../../../app/features/artifact/artifactSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

export interface StatSelectorProps {
  artifactType: string;
  stat: string;
  id: number;
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

const StatSelector = (props: StatSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const state = useAppSelector((state) => state.artifact);
  const dispatch = useAppDispatch();

  return (
    <InputGroup>
      <InputGroupButtonDropdown
        addonType="prepend"
        isOpen={dropdownOpen}
        toggle={toggleDropDown}
      >
        <DropdownToggle caret>{props.stat}</DropdownToggle>
        <DropdownMenu>
          {stats.map((item) => (
            <DropdownItem
              onClick={() => {
                dispatch(
                  updateStatType({
                    artifactType: props.artifactType,
                    statType: item,
                    index: props.id,
                  })
                );
              }}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </InputGroupButtonDropdown>

      <Input
        type="number"
        value={state.artifacts[props.artifactType].stats[props.id]}
        onChange={(e) =>
          dispatch(
            updateStat({
              artifactType: props.artifactType,
              stat: parseInt(e.target.value),
              index: props.id,
            })
          )
        }
      />
    </InputGroup>
  );
};

export default StatSelector;
