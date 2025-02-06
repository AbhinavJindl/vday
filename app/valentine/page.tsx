// create a valentine card invite with yes or no buttons for my girlfriend
// make the no button so that it is hard to click such that hovering over it moves it else where

'use client'

import Image from "next/image";
import UntouchableButton from "./UntouchableButton";

export default function Valentine() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-24 text-center">
      <Image
        src="/valentinesday.gif"
        alt="Heart icon"
        width={500}
        height={500}
        priority
      />
      <h1 className="text-4xl font-bold">Harshu!! I love you with all of my existence and your devotee has a very humble request. 
        <br/> ¿Me honrarás siendo mi San Valentín?</h1>
      <div className="flex gap-4">
        <a
          className="rounded-full bg-red-500 text-white transition-colors flex items-center justify-center hover:bg-red-600 h-10 w-24"
          href="./confirm"
        >
          Yes
        </a>
        {UntouchableButton()}
      </div>
    </div>
  );
}


