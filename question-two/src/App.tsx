import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App py-20">
      <div className="form p-5 px-7 border mx-auto w-full sm:w-10/12 md:w-2/3 lg:w-1/2 bg-blue-600 text-white">
        <div className="py-2">
          <label className="block text-lg">Your full given name</label>
          <input
            type="text"
            className="block border border-white h-14 bg-transparent w-full font-normal outline-none px-3 "
          />
        </div>
        <div className="py-2">
          <label className="block text-lg">
            What school do you plan to attend
          </label>
          <input
            type="text"
            className="block border border-white h-14 bg-transparent w-full font-normal outline-none px-3 "
          />
        </div>
        <div className="py-2">
          <label className="block text-lg">
            Please take a moment to describe your intended area of study
          </label>
          <textarea className="block border border-white h-48 py-2 bg-transparent w-full font-normal outline-none px-3 resize-none" />
        </div>
      </div>
    </div>
  );
}

export default App;
