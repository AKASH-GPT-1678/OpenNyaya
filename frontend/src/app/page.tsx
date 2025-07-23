"use client";
import { ethers } from 'ethers';
// 0x0749a4AaF768f61B05B3569F7ef8290f51A85f3a

import { CONTRACT_ABI, CourtDetails } from './data';

export default function Home() {
   enum CourtCategory {
  District,
  High,
  Supreme,
}

 enum CourtType {
  Civil,
  Criminal,
  Family,
  Labour,
  Tribunal,
}

  const contractAdress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;
  const privateKey = process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY as string;
  const providerURL = process.env.NEXT_PUBLIC_PROVIDER_URL as string;

  const provider = new ethers.JsonRpcProvider(providerURL);
  const contract = new ethers.Contract(contractAdress, CONTRACT_ABI, provider);

  async function createCourt(details : CourtDetails) {
    
  }


  return (

    <div className='p-4'>
      <h1>Hello world</h1>



    </div>
  );
}
