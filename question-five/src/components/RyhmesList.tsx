import { IRyhmesResponse } from '../types/ryhmes.types';

interface IProps {
  ryhmes: IRyhmesResponse[];
  isLoading: boolean;
  word: string;
}

export default function RyhmesList({ ryhmes, isLoading, word }: IProps) {
  return (
    <div className="py-2">
      {isLoading ? (
        <img src="/rolling.gif" className="block object-cover h-8" />
      ) : word.length === 0 ? (
        <h4 className="text-gray-400 text-xl border border-gray-300 border-dashed py-10 px-6 rounded">
          Found ryhmes will appear here
        </h4>
      ) : ryhmes.length === 0 ? (
        <h4 className="text-gray-400 text-xl py-5 px-4">
          No ryhmes available for "{word}""
        </h4>
      ) : (
        <div>
          <p className="text-xl italic text-gray-500 pt-2 pb-4">
            Ryhmes for "{word}"
          </p>
          {ryhmes.map(ryhme => (
            <p
              key={ryhme.word}
              className="py-1 text-gray-500 font-normal text-base capitalize"
            >
              {ryhme.word}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

//   );
// }
