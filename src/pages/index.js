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
    <div className="flex items-center w-full md:pt-12 pt-24 md:justify-between gap-4 md:gap-0 md:flex-row flex-col py-6 md:px-16 px-3 md:bg-none bg-right bg-cover bg-no-repeat">
    <div>
      <div className="flex flex-col justify-center  w-full text-center md:gap-6 gap-12   ">
        <span className="text-[#1cdfff] font-golos  md:text-[57px] text-[25px] font-normal">
          Everything you really
        </span>

        <div className="flex flex-row items-center justify-center text-center w-full gap-2">
          <span className="text-[#1cdfff] font-golos md:text-[55px] text-[23px] font-bold">
            want in
          </span>
          <span className="gradient-text  font-golos md:text-[55px] text-[23px] font-bold">
            crypto
          </span>
        </div>

        <span className="text-[#1cdfff] font-golos md:text-[55px] text-[23px] font-normal ">
          improved!
        </span>
        <div className="pt-9">
          <Button className=" rounded-full w-full bg-gradient-to-r from-[#8092F1] to-[#FF00E6]">
            <Link href="./dashboard" color="foreground"> Explore Stats</Link>
          </Button>
        </div>
      </div>

   

      <div className="mt-4 gap-2 flex flex-row flex-wrap justify-center text-white">
  <div className="flex items-center font-golos text-[16px] flex-grow">
    <img
      className="mr-2"
      src="/ethr.png"
      width="25px"
      alt="Ethereum"
    ></img>{" "}
    Ethereum
  </div>

  <div className="flex items-center font-golos text-[16px] flex-grow">
    <img className="mr-2" src="/bnbb.svg" width="45px" alt="Bnb"/>
    <span> Bnb</span>
  </div>

  <div className="flex items-center font-golos text-[16px] flex-grow">
    <img
      className="mr-2"
      src="/arbb.png"
      width="25px"
      alt="Arbitrum"
    />
    <span> Arbitrum</span>
  </div>

  <div className="flex items-center font-golos text-[16px] flex-grow">
    <img
      className="mr-2"
      src="/matic.webp"
      width="25px"
      alt="Polygon"
    />
    <span>Polygon</span>
  </div>

  <div className="flex items-center font-golos text-[16px] flex-grow">
    <img
      className="mr-2"
      src="/op.png"
      width="25px"
      alt="Optimism"
    />
    <span>Optimism</span>
  </div>
</div>


        





       
     
    </div>

      <div className="w-full md:w-[50%] hidden md:flex h-[70vh] bg-right bg-cover bg-no-repeat "></div>
    </div>

    // <div className="flex flex-col justify-center items-center py-6 px-4 md:px-16">
    //   <div className="w-full bg-[url('../public/right.png')] bg-cover bg-no-repeat md:w-[50%]"></div>

    //   <div className="text-center mt-4 md:mt-0">
    //     <span className="text-[#1cdfff] font-golos text-[25px] font-normal">
    //       Everything you really
    //     </span>

    //     <div className="flex flex-row items-center justify-center flex-wrap gap-2">
    //       <span className="text-[#1cdfff] font-golos text-[55px] font-bold">
    //         want in
    //       </span>
    //       <span className="gradient-text font-golos text-[55px] font-bold">
    //         crypto
    //       </span>
    //     </div>

    //     <span className="text-[#1cdfff] font-golos text-[55px] font-normal ">
    //       improved!
    //     </span>

    //     <div className="mt-4">
    //       <Button className="rounded-full bg-gradient-to-r from-[#8092F1] to-[#FF00E6]">
    //         <Link href="./dashboard" color="foreground">
    //           Explore Stats
    //         </Link>
    //       </Button>
    //     </div>

        // <div className="mt-4 flex flex-wrap justify-center">
        //   <div className="flex items-center font-golos text-[16px]">
        //     <img
        //       className="mr-2"
        //       src="/ethr.png"
        //       width="25px"
        //       alt="Ethereum"
        //     ></img>{" "}
        //     Ethereum
        //   </div>

        //   <div className="flex items-center font-golos text-[16px]">
        //     <img className="mr-2" src="/bnbb.svg" width="45px" alt="Bnb"></img>{" "}
        //     Bnb
        //   </div>

        //   <div className="flex items-center font-golos text-[16px]">
        //     <img
        //       className="mr-2"
        //       src="/arbb.png"
        //       width="25px"
        //       alt="Arbitrum"
        //     ></img>{" "}
        //     Arbitrum
        //   </div>

        //   <div className="flex items-center font-golos text-[16px]">
        //     <img
        //       className="mr-2"
        //       src="/matic.webp"
        //       width="25px"
        //       alt="Polygon"
        //     ></img>{" "}
        //     Polygon
        //   </div>

        //   <div className="flex items-center font-golos text-[16px]">
        //     <img
        //       className="mr-2"
        //       src="/op.png"
        //       width="25px"
        //       alt="Optimism"
        //     ></img>{" "}
        //     Optimism
        //   </div>
        // </div>
    //   </div>
    // </div>


   


    
   
  


 

  );
}



