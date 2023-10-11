import "../../styles/globals.css";
import "../../styles/custom.css";

import "../../styles/topcorner.css";
import Navbar from "../components/navbar";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  zerionWallet,
} from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function App({ Component, pageProps }) {
  // const address = useAddress();
  // console.log(address);
  return (
    <NextUIProvider>
      <ThirdwebProvider
        activeChain="ethereum"
        
        clientId="d62d288eae1256ac84c3e4a1c810ebe3"
        supportedWallets={[
          metamaskWallet({ recommended: true }),
          coinbaseWallet(),
          walletConnect(),
          localWallet(),
          embeddedWallet(),
          zerionWallet({ recommended: true }),
        ]}
      >
        <div className="bg-[#08021C] min-h-screen h-full">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThirdwebProvider>
    </NextUIProvider>
  );
}

// bg-[url('https://img.freepik.com/free-vector/gradient-particle-wave-background_23-2150493031.jpg?w=2000&t=st=1696427539~exp=1696428139~hmac=85730baf43edb8ab772a12de974ac4cb4d9c118676553f3a54645516feaf269f')]

// <>
//       <div className="flex flex-wrap gap-3">
//         {sizes.map((size) => (
//           <Button key={size} onPress={() => handleOpen(size)}>Open {size}</Button>
//         ))}
//       </div>
//       <Modal
//         size={size}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
//               <ModalBody>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
//                   dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
//                   Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
//                 </p>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Action
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
