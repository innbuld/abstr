import React, { useState, useEffect, useMemo, PureComponent } from "react";
import Navbar from "@/components/navbar";
import MobulaData from "@/components/fetchbaldata";
import { shortenAddress } from "@/utils/shortenAddress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillCodepenCircle } from "react-icons/ai";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { LiaEthereum } from "react-icons/lia";
import { GoInfo } from "react-icons/go";
import { useAddress } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "@nextui-org/react";

const port = () => {
  const address = useAddress();
  const  [graphdata, setgraphdata] =useState([])
  const [listOfAddresses, setListOfAddresses] = useState([]);
  const [value, setValue] = useState("0xabcdefghijk12345678");
  useEffect(() => {
    const storedAddresses = localStorage.getItem("addresses");
    if (storedAddresses) {
      setListOfAddresses(JSON.parse(storedAddresses));
    } else {
      setListOfAddresses([address]);
    }
  }, [address]);


  function timestampToFormattedDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Adding 1 to get the correct month (0-indexed)
    const day = date.getDate();
    return `${day}/${month}/${year.toString().slice(2)}`;
  }
  

    // Ensure the current address is the selected one or the initial connected address
    useEffect(() => {
      const selectedAddress = localStorage.getItem("selectedAddress");
      if (selectedAddress) {
        if (listOfAddresses.includes(selectedAddress)) {
          setCurrentAddress(selectedAddress);
        } else {
          setCurrentAddress(address);
          localStorage.setItem("selectedAddress", address); // Reset selectedAddress
        }
      } else {
        setCurrentAddress(address);
      }
    }, [address, listOfAddresses]);
  

  // handle dele

  const handleDeleteAddress = (addressToDelete) => {
    if (window.confirm(`Are you sure you want to delete address ${addressToDelete}?`)) {
      const updatedList = listOfAddresses.filter((item) => item !== addressToDelete);
      setListOfAddresses(updatedList);
      localStorage.setItem("addresses", JSON.stringify(updatedList)); // Update the local storage
      localStorage.setItem("selectedAddress", address); // Reset selectedAddress
    }
  };


  const isInvalid = useMemo(() => {
    if (value === "") return false;
    return value.length < 10 ? false : true;
  }, [value]);

  const addToList = () => {
    const newArray = [...listOfAddresses, value];
    setListOfAddresses(newArray);
    localStorage.setItem("addresses", JSON.stringify(newArray)); // Save to local storage
  };


  // Debugging - Check if address selection is working correctly
const handleAddressSelect = (selectedAddress) => {
  console.log("Selected Address:", selectedAddress); // Add this line
  setCurrentAddress(selectedAddress);
  localStorage.setItem("selectedAddress", selectedAddress);
  console.log("localStorage: selectedAddress set to", selectedAddress); // Add this line
};



  


  const [currentAddress, setCurrentAddress] = useState("");

  useEffect(() => {
    // This code will run when the component is mounted

    setCurrentAddress(address);
    console.log("Component mounted", address);

    // You can perform any side effects or tasks here
    // Remember that without a dependency array, this will run every time the component renders
  }, [address]);



  
  const [selectedKeys, setSelectedKeys] = useState(new Set(["All Chain"]));

  const [selectedKe, setSelectedKe] = useState(new Set(["$1"])); // for asset tbl 1

  const selectedValu = useMemo(
    () => Array.from(selectedKe).join(", ").replaceAll("_", " "), // for asset tbl 1
    [selectedKe]
  );

  const [selectedK, setSelectedK] = useState(new Set(["$1"])); // for close position tbl
  const selectedVa = useMemo(
    () => Array.from(selectedK).join(", ").replaceAll("_", " "), // for close position tbl
    [selectedK]
  );

  const [selectedKey, setSelectedKey] = useState(new Set(["All "]));
  const selectedVal = useMemo(
    () => Array.from(selectedKey).join(", ").replaceAll("_", " "),
    [selectedKey]
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("blur");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  // Get the native currency balance e.g. Ether on Ethereum

  const [datas, setdata] = useState(); // state action for data

  // Define the function to fetch wallet history
  const getWalletHistory = async () => {
    const url = `https://api.app-mobula.com/api/1/wallet/history?wallet=${currentAddress}`; //
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
        setdata(data); //storing data here for use in frontend & back
        const history = data.data.balance_history.map((item, index) => ({
          
          date: timestampToFormattedDate(item[0]),  // Adjust the pv value as needed
          amt: item[1]  // Adjust the amt value as needed
        }));
        console.log(data, data.data.balance_history);
        setgraphdata(history)
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
    getWalletHistory();
  }, [currentAddress]); // Empty dependency array ensures that the effect runs only once when the component mounts, anytime address get changes, it'll run to get connected wall

  // portfolio

  const [datass, setdatas] = useState(); // state action for data

  // Define the function to fetch wallet portfolio
  const getpnl = async () => {
    const url =
    `https://api.app-mobula.com/api/1/wallet/portfolio?wallet=${currentAddress}&pnl=true`;
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
        setdatas(data);
        console.log(data);
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
  }, [currentAddress]); // Empty dependency array ensures that the effect runs only once when the component mounts

  ///tablke






  

  const data = [
    {
      name: "Page A",
   
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
 
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
    
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
  
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
    
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
   
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
 
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div >
      <div className="flex  flex-col md:flex-row justify-between items-center mt-8 px-4 md:px-10 ">
        <div className=" px-3">
          <p className="font-golos text-[45px] text-white font-bold">
            Dashboard
          </p>
          <span className="mt-5">
            <div className="flex flex-wrap gap-3">
              {backdrops.map((b) => (
                <>
                  {address ? (
                    <Dropdown>
                      <DropdownTrigger>
                        <Button
                          variant="light"
                          className="bg-gradient-to-r from-[#8092F1] to-[#FF00E6]"
                        >
                          <span>
                            My Wallet(s){" "}
                            <span className="text-white font-medium">
                              {shortenAddress(currentAddress)}
                            </span>
                          </span>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        {listOfAddresses.length > 1 &&
                          listOfAddresses.slice(1).map((item, i) => (
                            <DropdownItem key={item} onPress={() => handleAddressSelect(item)}>
                              <span>
                                {i + 2}{" "}
                                <span className="font-medium">
                                  {shortenAddress(item)}
                                </span>
                                <button
                        onClick={() => handleDeleteAddress(item)}
                        className="ml-2 text-red-500"
                      >
                        Delete
                      </button>
                              </span>
                            </DropdownItem>
                          ))}
                        <DropdownItem key="new" onPress={() => handleOpen(b)}>
                          <span className="flex flex-row gap-2 items-center ">
                            <HiMiniPlusSmall /> Add New Account
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Button
                      variant="light"
                      className="capitalize bg-gradient-to-r from-[#8092F1] to-[#FF00E6]"
                    >
                      <HiMiniPlusSmall /> Add Account
                    </Button>
                  )}
                </>
              ))}
            </div>

            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
              <ModalContent className="">
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Add New Account
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        isClearable
                        type="text"
                        placeholder="Wallet Address"
                        onClear={() => console.log("input cleared")}
                        onValueChange={setValue}
                        color={!isInvalid ? "danger" : "success"}
                        errorMessage={!isInvalid && "Please enter a valid address"}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" onPress={onClose}>
                        Close
                      </Button>
                      <Button
                        color="primary"
                        onPress={() => {
                          addToList();
                          onClose();
                        }}
                      >
                        Add
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </span>
        </div>

        <div>
          <Dropdown className="flex flex-row justify-between items-center">
            <DropdownTrigger>
              <Button
                variant="none"
                className="capitalize rounded-full hover:bg-[#525b8b] text-white font-golos text-[16px]"
              >
                <AiFillCodepenCircle /> {selectedValue} <RiArrowDropDownLine />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              overflow-y-scroll
            >
              <DropdownItem
                key="All_Chain"
                className="flex flex-row justify-between items-center"
              >
                {" "}
                All Chain
              </DropdownItem>

              <DropdownItem key="Ethereum" className="">
                {" "}
                <LiaEthereum />
                Ethereum
              </DropdownItem>
              <DropdownItem key="date"> BNB</DropdownItem>
              <DropdownItem key="matic">Matic</DropdownItem>
              <DropdownItem key="optimism">Optimism</DropdownItem>
              <DropdownItem key="avax">Avax</DropdownItem>
              <DropdownItem key="arbitrum">Arbitrum</DropdownItem>
              <DropdownItem key="base">Base</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left side: Large Graph */}
        <div className="w-full md:w-2/3 p-4 md:p-6">
          <div className="h-96 rounded-lg mb-60">
            <ResponsiveContainer width="100%" height="100%" className="mt-16">
              <LineChart
                width={500}
                height={300}
                data={graphdata}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="amt"
                  stroke="
                  #9419ca"
                  activeDot={{ r: 8 }}
                />
                
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right side: Four Boxes in a Column */}
        <div className="w-full md:w-1/3  p-4 md:p-6">
          <div className="flex flex-col space-y-4">
            {/* Box 1 */}
            <div className="bg-[#bd63ec] text-white rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-lg mb-8 font-golos text-[24px]">
                    Networth
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-golos">
                    ${datas?.data?.balance_usd ?? "0.00"}
                  </p>
                  <div className="flex space-x-2 mt-3 text-[10px] font-golos ml-2">
                    {/* <p>Text 1</p>
                    <p>Text 2</p> */}
                  </div>
                  {/* <div className="flex items-center">
      <img src="/your-image.png" alt="Image" className="mx-auto" />
    </div> */}
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[#bd63ec] text-white rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-lg mb-8 font-golos text-[24px]">
                    Netflow
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-golos">$16,649.973</p>
                  <div className="flex space-x-2 mt-3 text-[10px] font-golos ml-2">
                    {/* <p>Text 1</p>
                    <p>Text 2</p> */}
                  </div>
                  {/* <div className="flex items-center">
      <img src="/your-image.png" alt="Image" className="mx-auto" />
    </div> */}
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-[#bd63ec] text-white rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-lg mb-8 font-golos text-[24px]">
                    Realized Pnl
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-golos">
                    ${datass?.data?.total_realized_pnl ?? "0.00"}
                  </p>
                  <div className="flex space-x-2 mt-3 text-[10px] font-golos ml-2">
                    {/* <p>Text 1</p>
                    <p>Text 2</p> */}
                  </div>
                  {/* <div className="flex items-center">
      <img src="/your-image.png" alt="Image" className="mx-auto" />
    </div> */}
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-[#bd63ec] text-white rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-lg mb-8 font-golos text-[24px]">
                    Unrealized Pnl
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-golos">
                    ${datass?.data?.total_unrealized_pnl ?? "0.00"}
                  </p>
                  <div className="flex space-x-2 mt-3 text-[10px] font-golos ml-2">
                    {/* <p>Text 1</p>
                    <p>Text 2</p> */}
                  </div>
                  {/* <div className="flex items-center">
      <img src="/your-image.png" alt="Image" className="mx-auto" />
    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 py-5 gap-3 px-4 font-golos min-h-[190px] m-6 text-black rounded-2xl font-medium border-1 border-[#e5e5e5]">
        <div className="flex items-end font-golos text-[24px]">
          <span className="font-medium text-white mt-[-3px] ">Holding</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="font-golos text-[20px] font-medium text-white">
            Token
          </span>
          <span className="font-golos font-medium text-white">${datas?.data?.balance_usd ?? "0.00"}</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className=""></span>
          {/* <span className="font-golos text-[14px] text-[#a3a9b5]">
            Hide tokens less than{" "}
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant=""
                  className="capitalize rounded-3xl hover:bg-[#525b8b] bg-gradient-to-r from-[#8092F1] to-[#FF00E6] font-golos text-black"
                >
                  {selectedValu} <RiArrowDropDownLine />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKe}
                onSelectionChange={setSelectedKe}
              >
                <DropdownItem key="$0">$0</DropdownItem>
                <DropdownItem key="$1">$1</DropdownItem>
                <DropdownItem key="$5">$5</DropdownItem>
                <DropdownItem key="$10"> $10</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </span> */}
        </div>

       
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
            {datass?.data?.assets?.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                <div className="flex items-center space-x-2">
                    <img
                      src={item.asset.logo}
                      alt={item.asset.name}
                      width="32"
                      height="32"
                      className="rounded-lg"
                    />
                    <span className="text-black">{item.asset.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-black">${item.price}</TableCell>
                <TableCell className="text-black">{item.token_balance}</TableCell>
                <TableCell className="text-black">${item.realized_pnl}</TableCell>
                <TableCell className="text-black">${item.unrealized_pnl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </div>
    </div>
  );
};

export default port;