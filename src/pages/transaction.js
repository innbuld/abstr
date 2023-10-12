import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
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

export default function transaction() {
 

  const address = useAddress(); // get address
  const [data, setdata] = useState(); // state action for

  // useEffect(() => {
  //     if(data){
  //             console.log(data.data.data, data.data ,"show up") }
  //         })

  const [currentAddress, setCurrentAddress] = useState(address);

  useEffect(() => {
    // This code will run when the component is mounted

    setCurrentAddress(address);
    console.log("Component mounted", address);

    // You can perform any side effects or tasks here
    // Remember that without a dependency array, this will run every time the component renders
  }, [address]);

  useEffect(() => {
    // Retrieve the selected address from local storage
    const selectedAddress = localStorage.getItem("selectedAddress");
    
    if (selectedAddress) {
      // Use the selected address to fetch and display data for that address
      setCurrentAddress(selectedAddress);
    }
  }, []);

  
  





  // Define the function to fetch wallet portfolio
  
  const getTxn = async () => {
    const url = `https://api.app-mobula.com/api/1/wallet/transactions?wallet=${currentAddress}&blockchain=Ethereum&limit=100&offset=0&order=asc`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    try {
      // Use the fetch API to make the request
      const response = await fetch(url, options);

      // Check if the response status is OK (200)
      if (response.ok) {
        // Parse the response JSON
        const data = await response.json();
        setdata(data);
        console.log(data);
        console.log(data.data.transactions[0].asset.name, "show uppppp");
        console.log(data.data.transactions[0].date, "fucking showwww");
        console.log(data.data.transactions[0].amount_usd, " showwww");
        console.log(data.data.transactions[0].hash, " showwww");
      } else {
        // If the response status is not OK, log the error
        console.error("Error fetching wallet history:", response.statusText);
      }
    } catch (err) {
      // Log any other errors that may occur
      console.error("Error fetching wallet history:", err);
    }

    const url2 = `https://api.app-mobula.com/api/1/wallet/portfolio?wallet=${address}&pnl=true`;
  };

  // Use the useEffect hook to call the getWalletHistory function when the component mounts
  useEffect(() => {
    getTxn();
  }, [currentAddress]); // Empty dependency array ensures that the effect runs only once when the component mounts

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

          <div className="flex flex-col bg-table ">
            <Table
              selectionMode="single"
              defaultSelectedKeys={["2"]}
              aria-label="Example static collection table"
              className="bg-table"
            >
              <TableHeader>
                <TableColumn width="20%">ASSETS</TableColumn>
                <TableColumn typeof="number">AMOUNT</TableColumn>
                <TableColumn typeof="number">TYPE</TableColumn>
                <TableColumn>DATE</TableColumn>
                <TableColumn>TRANSACTION </TableColumn>
              </TableHeader>
              <TableBody className="text-black">
                {data?.data?.transactions?.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {/* <img
                      src={item.asset.logo}
                      alt={item.asset.name}
                      width="32"
                      height="32"
                      className="rounded-lg"
                    /> */}
                        <span className="text-black">{item.asset.symbol}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-black">
                      ${item.amount_usd}
                    </TableCell>
                    <TableCell className="text-black">{item.type}</TableCell>
                    <TableCell className="text-black">{item.date}</TableCell>
                    <TableCell className="text-black">
                      <Link href={`https://www.etherscan.io/tx/${item.hash}`}>
                        {" "}
                        {item.hash}
                      </Link>{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
