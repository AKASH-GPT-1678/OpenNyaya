"use client";

import { ethers } from "ethers";
import { CONTRACT_ABI, CourtDetails, CourtType , CourtCategory } from "./data";


export default function Home() {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;
  const privateKey = process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY as string;
  const providerURL = process.env.NEXT_PUBLIC_PROVIDER_URL as string;

  // Setup provider
  const provider = new ethers.JsonRpcProvider(providerURL);

  // Setup read-only contract
  const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, provider);

  // Function to create a court
  async function createCourt(details: CourtDetails) {
    try {
      const signer = new ethers.Wallet(privateKey, provider);
      const contractWithSigner : any = contract.connect(signer);

      // 🧪 Debug log
      console.log("Sending Court Details:", {
        ...details,
        value: "1 ETH",
      });

      // Sending transaction with 1 ETH
      const tx = await contractWithSigner.addCourt(
        details.name,
        details.state,
        details.category,
        details.typeofCourt,
        details.adminUserName,
        details.password,
        {
          value: ethers.parseEther("1.0"),
        }
      );

      console.log("Transaction sent:", tx.hash);

      await tx.wait();
      console.log("Transaction confirmed!");
    } catch (error: any) {
      console.error("Error adding court:", error);
      alert("Error: " + error.message);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Create Court</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() =>
          createCourt({
            name: "Test Court",
            state: "Maharashtra",
            typeofCourt: "District",
            category: "Criminal",
            adminUserName: "admin_test",
            password: "password123",
          })
        }
      >
        Create
      </button>
    </div>
  );
}
