"use client";

import react from "react";
import Link from "next/link";
import { useState } from "react";
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
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarVisible(!mobileSidebarVisible);
  };

  return (
    // <div className="bg-[#070219] flex justify-between items-center p-4">
    //   <div className="px-8">
    //     <div className=" ">
    //       <img className="mr-2" src="/Frame 31.png" width="44%"></img>
    //     </div>
    //   </div>

    // <div className="text-white flex justify-center space-x-4">
    //   <div className="text-[#7f80f0] font-poppins "><Link href={'/'}> Home</Link> </div>
    //   <div> <Link href={'./dashboard'}> Dashboard </Link></div>
    //   <div><Link href={'./transaction'}>Transactions</Link></div>
    // </div>

    // <div className=" flex items-center space-x-2">
    //   <ConnectWallet
    //     theme={darkTheme({ primaryButtonBg: "#d400ff" })}
    //     switchToActiveChain={true}
    //     modalSize={"wide"}
    //     className="bg-gradient-to-r from-[#8092F1] to-[#FF00E6] "
    //   />
    // </div>
    // </div>

    <div className="bg-[#070219] p-4">
      <div className="flex justify-between items-center">
        <div className="px-8">
          <div className="">
            <img className="mr-2" src="/cat1.png" width="44%"></img>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center gap-5">
          <div className="text-white flex justify-center items-center space-x-4">
            <div className="text-[#7f80f0] font-poppins ">
              <Link href={"/"}> Home</Link>
            </div>
            <div>
              <Link href={"./dashboard"}> Dashboard </Link>
            </div>
            <div>
              <Link href={"./transaction"}>Transactions</Link>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ConnectWallet
              theme={darkTheme({ primaryButtonBg: "#d400ff" })}
              switchToActiveChain={true}
              modalSize={"wide"}
              className="bg-gradient-to-r from-[#8092F1] to-[#FF00E6] "
            />
          </div>
        </div>

        {/* Mobile Sidebar Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileSidebar}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        id="mobileSidebar"
        className={
          mobileSidebarVisible ? "block lg:hidden" : "hidden lg:hidden"
        }
      >
        <div className="text-white p-2">
          <Link href="/">Home</Link>
        </div>
        <div className="text-white p-2">
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div className="text-white p-2">
          <Link href="/transaction">Transactions</Link>
        </div>
        <div className="p-2">
          <ConnectWallet
            theme={darkTheme({ primaryButtonBg: "#d400ff" })}
            switchToActiveChain={true}
            modalSize={"wide"}
            className="bg-gradient-to-r from-[#8092F1] to-[#FF00E6]"
          />
        </div>
      </div>
    </div>
  );
}
