
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


export default function Home() {
  

  return (
    <div className="flex justify-between py-6 px-16 ">
    <div className="flex flex-col justify-center  w-[52%] h-[100%]  bg-cover bg-no-repeat">
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
            <Link href="./dashboard" color="foreground"> Explore Stats</Link>
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
