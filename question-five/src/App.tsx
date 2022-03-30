import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import RyhmesList from './components/RyhmesList';
import { IRyhmesResponse } from './types/ryhmes.types';

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [word, setword] = useState('');
  const [ryhmes, setRyhmes] = useState<IRyhmesResponse[]>([]);

  const handleSubmit = async (word: string) => {
    setisLoading(true);
    setRyhmes([]);
    fetchRyhmes(word);
  };

  const fetchRyhmes = async (word: string) => {
    axios
      .get(`https://api.datamuse.com/words?rel_rhy=${word}`)
      .then(res => {
        setword(word);
        setRyhmes(res.data);
      })
      .catch(er => {
        console.error(er);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  console.log(ryhmes);

  return (
    <div className="App">
      {/* header */}
      <div className="bg-gray-800 py-6 px-14 text-white">
        <h1 className="text-4xl font-bold">Rhyme finder</h1>
      </div>
      <div className="my-10 mx-auto md:w-2/3 lg:w-1/2 border shadow-sm py-6 min-h-100 px-10 rounded-md">
        <Form isLoading={isLoading} handleFind={handleSubmit} />
        <RyhmesList word={word} ryhmes={ryhmes} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
