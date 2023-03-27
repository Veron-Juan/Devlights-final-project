import React from "react";

export function ModalForm(){ 
    return(
<>
<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
  <div className="relative w-[80vw] sm:w-auto max-w-3xl">
    {/*content*/}
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
      {/* Info del Post */}

      <div className="flex flex-row h-auto justify-between my-2 mx-2.5 pb-2 border-b ">
    </div>
    </div>
    </div>
    </div>
<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
);
};