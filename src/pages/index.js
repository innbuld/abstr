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
          CatWifMaga
        </span>

        <div className="flex flex-row items-center justify-center text-center w-full gap-2">
          <span className="text-[#1cdfff] font-golos md:text-[55px] text-[23px] font-bold">
            Portfolio Tracker
          </span>
          <span className="gradient-text  font-golos md:text-[55px] text-[23px] font-bold">
            
          </span>
        </div>

        <span className="text-[#1cdfff] font-golos md:text-[55px] text-[23px] font-normal ">
          
        </span>
        <div className="pt-9">
          <Button className=" rounded-full w-full bg-[red]">
            <Link href="./dashboard" color="foreground"> Explore CatWifMaga</Link>
          </Button>
        </div>
      </div>

   

      <div className="mt-4 gap-2 flex flex-row flex-wrap justify-center text-white">
      <div class="flex justify-center items-center  font-golos text-[16px] h-full">
  <img
    class="inline mr-1"
    src="/Solana_logo.png"
    width="25px"
    alt="Solana"
  />
  <span class="inline">Solana</span>
</div>
 
</div>


        





       
     
    </div>

      <div className="w-full md:w-[50%] hidden md:flex h-[70vh] bg-right bg-cover bg-no-repeat "></div>
    </div>

   

   


    
   
  


 

  );
}



