import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";

const companyCommonStyles = "min-h-[50px] sm:px-1 px-6 sm:min-w-[100px] flex justify-center items-center border-[10px] border-green-20 text-sm font-light text-black";


const Input = ({ placeholder, name, type, value, handleChange }) => (


  <input

    placeholder={placeholder}
    type={type}
    step="1"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);


const Welcome = () => {
  const { connectedAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;



    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (


    <div className=" flex w-1/2 justify-center items-center  ">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 ">

        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Trade and play ZENFT <br /> around the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Help Zombies find the missing coins and get fabulous rewards
          </p>
          {!connectedAccount && <button
            type="button"
            onClick={async () => {
              const result = await connectWallet()
              console.log({ result });

            }}
            className="flex flex-row justify-center items-center my-5 bg-[#6aa559] p-3 rounded-full cursor-pointer hover:bg-[#559743]"
          >

            <p className="text-white text base font-semibold">Connect Wallet</p>
          </button>}





        </div>


        <p className="text-white">Choose the number of coins to exchange:</p>
        <div className="p-2 sm:w-50 w-50% flex flex-col justify-start items-center blue-glassmorphism">

          <Input placeholder="Amount (ZENFT)" name="amount" type="number" handleChange={handleChange}
          />


          <div className="h-[3px] w-full bg-[#6aa559] my-2" />

          {isLoading
            ? <Loader />
            : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 font-semibold p-2 bg-[#6aa559] hover:bg-[#559743] rounded-full cursor-pointer"
              >
                Get
              </button>
            )}
        </div>










      </div>






    </div>

  )

};


export default Welcome;