"use client";

import react from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { CiTwitter } from "react-icons/ci";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { GrStakeholder } from "react-icons/gr";
import { IoNewspaper } from "react-icons/io5";
import { BsFillSendCheckFill } from "react-icons/bs";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  darkTheme,
  lightTheme,
  zerionWallet,
} from "@thirdweb-dev/react";

const customDarkTheme = darkTheme({
  fontFamily: "Inter, sans-serif",
  colors: {
    modalBg: "#000000",
    accentText: "red",
    // ... etc
  },
});

export default function Navbar() {
  return (
    <div className="bg-[#070219] flex justify-between items-center p-4">
      <div className="px-8">
        <div className=" ">
          <img className="mr-2" src="/Frame 31.png" width="44%"></img>
        </div>
      </div>

      <div className="text-white flex justify-center space-x-4">
        <div className="text-[#7f80f0] font-poppins ">Home</div>
        <div>Dashboard</div>
        <div>News</div>
      </div>

      <div className=" flex items-center space-x-2">
        <ConnectWallet
          theme={darkTheme({ primaryButtonBg: "#d400ff" })}
          switchToActiveChain={true}
          modalSize={"wide"}
          className="bg-gradient-to-r from-[#8092F1] to-[#FF00E6] "
        />
      </div>
    </div>
  );
}
