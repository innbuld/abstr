// Import React and useEffect from React
import React, { useEffect, useState } from 'react';
import { useAddress } from '@thirdweb-dev/react';

// Create a functional component named Dashboard
const Dashboard = () => {

    const address = useAddress() // get address 
    const [data,setdata] =  useState() // state action for data

  // Define the function to fetch wallet history
  const getWalletHistory = async () => {
    const url =   `https://api.app-mobula.com/api/1/wallet/history?wallet=${address}` ;  //
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
        setdata(data) //storing data here for use in frontend & back
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
    getWalletHistory();
  }, [address]); // Empty dependency array ensures that the effect runs only once when the component mounts, anytime address get changes, it'll run to get connected wall

  // Return any JSX you want to render for the Dashboard component
  return (
    <div className='text-white '>
      <span>{address ?? "Your address would show here"} </span>
      <span>{data?.data?.balance_usd ?? "Your balance would show here"}</span>
      
    </div>
  );
};

// Export the Dashboard component
export default Dashboard;
























// useEffect(() => {
//     // Retrieve the initially selected address from local storage
//     const storedAddress = localStorage.getItem("selectedAddress");
  
//     if (storedAddress) {
//       setCurrentAddress(storedAddress);
//     }
//   }, []);
  