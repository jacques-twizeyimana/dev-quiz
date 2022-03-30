import { useState } from 'react';

interface IProps {
  handleFind: (word: string) => void;
  isLoading: boolean;
}

export default function Form({ handleFind, isLoading }: IProps) {
  const [word, setword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFind(word);
  };

  return (
    <form className="pb-10" onSubmit={handleSubmit}>
      <label htmlFor="word" className="block text-lg font-medium py-2">
        Enter a word to find its ryhme
      </label>
      <div className="flex">
        <input
          type="text"
          id="word"
          placeholder="Type a word"
          value={word}
          required
          onChange={e => setword(e.target.value)}
          className="border block w-full rounded-l-md text-lg outline-none border-gray-400 px-4 h-14 focus:border-gray-800"
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-gray-800 text-white py-3 px-12 text-base font-semibold tracking-wider rounded-r-xl"
        >
          {isLoading ? (
            <img src="/rolling.gif" className="block object-cover h-8" />
          ) : (
            'Find'
          )}
        </button>
      </div>
    </form>
  );
}
