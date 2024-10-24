import React from 'react';
import Posts from '../Posts';


function Content(props) {
  return (
    <div className='flex flex-grow pt-16 justify-center'>

      <div
        className="w-full md:w-3/6 mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40 bg-customGray mt-8">
        {/* <EditorComponent /> */}
        <Posts />
      </div>
    </div>

  );
}

export default Content;