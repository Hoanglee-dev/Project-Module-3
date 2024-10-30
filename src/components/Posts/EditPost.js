import React from "react";
import EditStatus from "./EditStatus";

const EditPost = () => {
  return (
    <div className="flex flex-grow pt-16 justify-center">
      <div className="w-full md:w-3/6 mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40 bg-customGray mt-8">
        <div className="flex flex-col gap-2 mb-6 justify-center items-center">
          <EditStatus />
        </div>
      </div>
    </div>
  );
};

export default EditPost;
