import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App py-20">
      <div className="form p-5 px-7 border mx-auto w-full sm:w-10/12 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-primary text-white">
        <div className="py-2">
          <label className="block text-lg italic py-1">
            Your full given name
          </label>
          <input
            type="text"
            placeholder='e.g. "John Doe"'
            className="block border border-white h-12 bg-transparent w-full font-normal outline-none px-3 placeholder:text-gray-300 "
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="py-2">
            <label className="block text-lg italic py-1">Date of birth</label>
            <div className="flex w-full border border-white h-12 bg-transparent items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
              <input
                type="text"
                className="block bg-transparent w-full font-normal outline-none px-3 placeholder:text-gray-300"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="py-3">
            <label className="block text-lg italic py-1">
              Country of residence or citizenship
            </label>
            <input
              type="text"
              placeholder='e.g. "United Kingdom"'
              className="block border border-white h-12 bg-transparent w-full font-normal outline-none px-3 placeholder:text-gray-300 "
            />
          </div>
        </div>

        <div className="py-3">
          <label className="block text-lg italic py-1">
            What school do you plan to attend
          </label>
          <input
            type="text"
            placeholder='e.g. "University of Cambridge"'
            className="block border border-white h-12 bg-transparent w-full font-normal outline-none px-3 placeholder:text-gray-300 "
          />
        </div>

        <div className="py-3">
          <label className="block text-lg italic py-1">
            Please take a moment to describe your intended area of study
          </label>
          <textarea
            placeholder="Please enter details"
            className="block border border-white h-48 py-2 bg-transparent w-full font-normal outline-none px-3 placeholder:text-gray-300 resize-none"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
