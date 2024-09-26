import React from "react";
import { uplodFile } from "../../asstes";
function UploadWork() {
  return (
    <>
      <div className=" overflow-auto p-4 flex flex-wrap">
        <div className="w-[20rem] h-[20rem] border-dashed border-2 border-grey-600 p-4 flex justify-center items-center m-8">
          <img src={uplodFile} alt="img" className="max-w-full max-h-full" />
        </div>
        <div className="w-[20rem] h-[20rem] border-dashed border-2 border-grey-600 p-4 flex justify-center items-center m-8">
          <img src={uplodFile} alt="img" className="max-w-full max-h-full" />
        </div>
        <div className="w-[20rem] h-[20rem] border-dashed border-2 border-grey-600 p-4 flex justify-center items-center m-8">
          <img src={uplodFile} alt="img" className="max-w-full max-h-full" />
        </div>

        <div className="w-[20rem] h-[20rem] border-dashed border-2 border-grey-600 p-4 flex justify-center items-center m-8">
          <img src={uplodFile} alt="img" className="max-w-full max-h-full" />
        </div>



      </div>
    </>
  );
}

export default UploadWork;
