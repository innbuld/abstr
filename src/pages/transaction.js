import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { Button } from "@nextui-org/button";

export default function transaction() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["All Chain"])
  );

  const [selectedKe, setSelectedKe] = React.useState(new Set(["$1"])); // for asset tbl 1

  const selectedValu = React.useMemo(
    () => Array.from(selectedKe).join(", ").replaceAll("_", " "), // for asset tbl 1
    [selectedKe]
  );

  const [selectedK, setSelectedK] = React.useState(new Set(["$1"])); // for close position tbl

  const selectedVa = React.useMemo(
    () => Array.from(selectedK).join(", ").replaceAll("_", " "), // for close position tbl
    [selectedK]
  );

  const [selectedKey, setSelectedKey] = React.useState(new Set(["All "]));

  const selectedVal = React.useMemo(
    () => Array.from(selectedKey).join(", ").replaceAll("_", " "),
    [selectedKey]
  );

  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  const [selectedColor, setSelectedColor] = React.useState("default");

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [selected, setSelected] = React.useState("photos");

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="justify-between items-center mt-16 px-10">
        <div className="px-3">
          <div className=" text-white font-medium text-[28px] font-golos">
            <p>Transactions</p>
          </div>

          <div className="text-white font-golos mt-4">
            <p>Analyze all of your transactions in a single location</p>
          </div>
        </div>

        <div className="flex flex-col mt-8 py-5 gap-3 px-4 font-golos  min-h-[190px] text-black rounded-2xl font-medium border-1 border-[#e5e5e5]">
          <div className="flex items-end font-golos text-[24px]">
            <span className="font-medium text-white">Wallet Activities</span>
          </div>

          <div className="flex flex-col mt-8 ">
            <Table
              selectionMode="single"
              defaultSelectedKeys={["2"]}
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn width="20%">ASSETS</TableColumn>
                <TableColumn typeof="number">AMOUNT</TableColumn>
                <TableColumn>DATE</TableColumn>
                <TableColumn>EXPLORER</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>$0.9996</TableCell>
                  <TableCell>6,477.2803</TableCell>
                  <TableCell>JFJ Reichert</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>$0.2410</TableCell>
                  <TableCell>17,115.3234</TableCell>
                  <TableCell>WW Reichert</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>XX Reichert</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>NN Reichert</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {/* <RadioGroup 
                              label="Selection color"
                              orientation="horizontal"
                              value={selectedColor} 
                              onValueChange={setSelectedColor}
                            >
                              {colors.map((color) => (
                                <Radio
                                  key={color}
                                  color={color}  
                                  value={color}
                                  className="capitalize"
                                >
                                  {color}
                                </Radio>  
                              ))}
                            </RadioGroup> */}
          </div>
        </div>
      </div>
    </div>
  );
}
