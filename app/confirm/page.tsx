// create a valentine card invite with yes or no buttons for my girlfriend
// make the no button so that it is hard to click such that hovering over it moves it else where

'use client'

import Image from "next/image";

export default function Confirm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-24 text-center">
      <Image
        src="/roses.gif"
        alt="Heart icon"
        width={500}
        height={500}
        priority
      />
      <h1 className="text-4xl font-bold">¡¡Gracias por hacerme el tipo más afortunado de este mundo!!</h1>
    </div>
  );
}


