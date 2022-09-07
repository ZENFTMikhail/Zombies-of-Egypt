import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const companyCommonStyles = "min-h-[50px] sm:px-1 px-2 sm:min-w-[150px] flex justify-center items-center border-[2px] border-green-20 text-sm font-light text-black";

const Welcome = () => {

const connectWallet = () => {

} 
return (
<div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Trade and play ZENFT <br /> around the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Help Zombies find the missing coins and get fabulous rewards
          </p>
          <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#6aa559] p-3 rounded-full cursor-pointer hover:bg-[#559743]"
            >
            
          <p className="text-white text base font-semibold">Connect Wallet</p>
            </button>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 ">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>

              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            
            </div>
        </div>
        </div>
        

</div>)
    
};

export default Welcome;