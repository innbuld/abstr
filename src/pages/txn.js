// Import React and useEffect from React
import React, { useEffect, useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";

// Create a functional component named Dashboard
const txn = () => {
  const address = useAddress(); // get address
  const [data, setdata] = useState(); // state action for

  // useEffect(() => {
  //     if(data){
  //             console.log(data.data.data, data.data ,"show up") }
  //         })

  // Define the function to fetch wallet portfolio
  const getTxn = async () => {
    const url = `https://api.app-mobula.com/api/1/wallet/transactions?wallet=${address}&blockchain=Ethereum&limit=100&offset=0&order=asc`;
    
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
  }, [address]); // Empty dependency array ensures that the effect runs only once when the component mounts

  // Return any JSX you want to render for the Dashboard component
  return (
    <div className="text-white">
      <span>{address ?? "Your address would show here"} </span>
      {/* <span>
        {data?.data?.total_realized_pnl ?? "Your balance would show here"}
      </span>
      <span>
        {data?.data?.total_unrealized_pnl ?? "Your balance would show here"}
      </span>
      <span>
        {data?.data?.assets[0].realized_pnl ?? "Your balance would show here"}
      </span>
      <span>
        {data?.data?.assets[0].asset.name ?? "Your name would show here"}
      </span> */}

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
                <TableCell className="text-black">${item.amount_usd}</TableCell>
                <TableCell className="text-black">{item.type}</TableCell>
                <TableCell className="text-black">{item.date}</TableCell>
                <TableCell className="text-black"><Link href={`https://www.etherscan.io/tx/${item.hash}`}> {item.hash}</Link> </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// Export the Dashboard component
export default txn;










