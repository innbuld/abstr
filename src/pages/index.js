
import Image from "next/image";
import { Button } from "@nextui-org/button";
import React from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { PureComponent } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Link } from "@nextui-org/react";
import LineChart from "@/components/line";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
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

import { Tabs, Tab } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { Chart } from "chart.js";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillCodepenCircle } from "react-icons/ai";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { LiaEthereum } from "react-icons/lia";
import { GoInfo } from "react-icons/go";

export default function Home() {
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

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

  const data = [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 100 },
    { name: "Group C", value: 100 },
    { name: "Group D", value: 100 },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="red-500"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="flex justify-between py-6 px-16 ">
      <div className="flex flex-col justify-center  w-[52%] h-[100%] bg-[url('../public/great.png')] bg-cover bg-no-repeat">
        <div className="flex flex-col  mt-32">
          <span className="text-[#1cdfff] font-golos text-[25px] font-normal">
            Everything you really
          </span>

          <div className="flex flex-row items-center gap-2">
            <span className="text-[#1cdfff] font-golos text-[55px] font-bold">
              want in
            </span>
            <span className="gradient-text  font-golos text-[55px] font-bold">
              crypto
            </span>
          </div>

          <span className="text-[#1cdfff] font-golos text-[55px] font-normal ">
            improved!
          </span>
          <div className="mt-9">
            <Button className=" rounded-full bg-gradient-to-r from-[#8092F1] to-[#FF00E6]">
              Explore Stats
            </Button>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-white flex flex-row gap-5">
            <p className="flex items-center font-golos text-[16px]">
              <img className="mr-2" src="/ethr.png" width="25px"></img> Ethereum
            </p>

            <p className="flex items-center font-golos text-[16px]">
              <img className="mr-2" src="/bnbb.svg" width="45px"></img> Bnb
            </p>
            <p className="flex items-center font-golos text-[16px]">
              <img className="mr-2" src="/arbb.png" width="25px"></img> Arbitrum
            </p>
            <p className="flex items-center font-golos text-[16px]">
              <img className="mr-2" src="/matic.webp" width="25px"></img>{" "}
              Polygon
            </p>
            <p className="flex items-center font-golos text-[16px]">
              <img className="mr-2" src="/op.png" width="25px"></img> Optimism
            </p>
          </div>
        </div>
      </div>

      <div className="w-[50%]  bg-[url('../public/right.png')] bg-cover bg-no-repeat"></div>
    </div>
  );
}
