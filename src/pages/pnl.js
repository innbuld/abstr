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

// Create a functional component named Dashboard
const pnl = () => {
  const address = useAddress(); // get address
  const [data, setdata] = useState(); // state action for

  // useEffect(() => {
  //     if(data){
  //             console.log(data.data.data, data.data ,"show up") }
  //         })

  // Define the function to fetch wallet portfolio
  const getpnl = async () => {
    const url = `https://api.app-mobula.com/api/1/wallet/portfolio?wallet=${address}`;
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
        console.log(data.data.assets[0].asset.name, "show uppppp");
        console.log(data.data.assets[0].price, "fucking showwww");
      } else {
        // If the response status is not OK, log the error
        console.error("Error fetching wallet history:", response.statusText);
      }
    } catch (err) {
      // Log any other errors that may occur
      console.error("Error fetching wallet history:", err);
    }
  };

  // Use the useEffect hook to call the getWalletHistory function when the component mounts
  useEffect(() => {
    getpnl();
  }, [address]); // Empty dependency array ensures that the effect runs only once when the component mounts

  // Return any JSX you want to render for the Dashboard component
  return (
    <div className="text-white">
      <span>{address ?? "Your address would show here"} </span>
      <span>
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
      </span>

      <div className="flex flex-col bg-table ">
        <Table
          selectionMode="single"
          defaultSelectedKeys={["2"]}
          aria-label="Example static collection table"
          className="bg-table"
        >
          <TableHeader>
            <TableColumn width="40%">ASSETS</TableColumn>
            <TableColumn typeof="number">PRICE</TableColumn>
            <TableColumn>AMOUNT</TableColumn>
            <TableColumn>REALIZED PNL</TableColumn>
            <TableColumn>UNREALIZED PNL</TableColumn>
          </TableHeader>
          <TableBody className="text-black">
            {data?.data?.assets?.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <img
                    src={item.asset.logo}
                    alt={item.asset.name}
                    width="32"
                    height="32"
                    className="rounded-lg"
                  /> {item.asset.name}
                </TableCell>
                <TableCell className="text-black">{item.price}</TableCell>
                <TableCell className="text-black">{item.token_balance}</TableCell>
                <TableCell className="text-black">{item.realized_pnl}</TableCell>
                <TableCell className="text-black">{item.unrealized_pnl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// Export the Dashboard component
export default pnl;










// <div className="flex items-center space-x-2">
//                     <img
//                       src={item.asset.logo}
//                       alt={item.asset.name}
//                       width="32"
//                       height="32"
//                       className="rounded-lg"
//                     />
//                     <span className="text-black">{item.asset.name}</span>
//                   </div>