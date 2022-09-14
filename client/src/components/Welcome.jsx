import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const companyCommonStyles = "min-h-[50px] sm:px-1 px-6 sm:min-w-[100px] flex justify-center items-center border-[10px] border-green-20 text-sm font-light text-black";
const companyChangeStyles = "min-h-[100px] sm:px-2 px-1 sm:min-w-[300px] flex justify-center items-center border-[50px] border-green-20 text-sm font-light text-black";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);


const Welcome = () => {

const connectWallet = () => {

} 
return (


<div className="flex w-full justify-center items-center ">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 ">
        
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
            
          
            
          

         </div>
         <p className="text-white">Choose the number of coins to exchange:</p>
         <div className="grid sm:grid-cols-1 bg-[#4d7741] text-center hover:bg-[#435a3d] grid-cols-1 w-full mt-5">
           
          <div className="select">
            <div className="select__input"></div>
            <div className="select__dropdown"></div>
           

          </div>
            <div className={`sm:rounded-tr-1x1 ${companyCommonStyles}`}>
             
            </div>



         </div>
         </div>
       
        
        
        
       
</div>

)

};


export default Welcome;