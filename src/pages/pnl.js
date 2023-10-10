// Import React and useEffect from React
import React, { useEffect, useState } from 'react';
import { useAddress } from '@thirdweb-dev/react';

// Create a functional component named Dashboard
const pnl = () => {

    const address = useAddress() // get address 
    const [data,setdata] =  useState() // state action for

  // Define the function to fetch wallet portfolio
  const getpnl = async () => {
    const url = `https://api.app-mobula.com/api/1/wallet/portfolio?wallet=${address}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    try {
      // Use the fetch API to make the request
      const response = await fetch(url, options);

      // Check if the response status is OK (200)
      if (response.ok) {
        // Parse the response JSON
        const data = await response.json();
        setdata(data) 
        console.log(data);
      } else {
        // If the response status is not OK, log the error
        console.error('Error fetching wallet history:', response.statusText);
      }
    } catch (err) {
      // Log any other errors that may occur
      console.error('Error fetching wallet history:', err);
    }
  };

  // Use the useEffect hook to call the getWalletHistory function when the component mounts
  useEffect(() => {
    getpnl();
  }, [address]); // Empty dependency array ensures that the effect runs only once when the component mounts

  // Return any JSX you want to render for the Dashboard component
  return (
    <div className='text-white'>
      <span>{address ?? "Your address would show here"} </span>
      <span>{data?.data?.total_realized_pnl ?? "Your balance would show here"}</span>
      <span>{data?.data?.total_unrealized_pnl ?? "Your balance would show here"}</span>
    </div>
  );
};

// Export the Dashboard component
export default pnl;