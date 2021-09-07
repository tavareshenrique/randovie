import PlatformsList from '../PlatformsList';

import netflixImg from '../../../public/netflix.png';
import disneyImg from '../../../public/disney.png';
import hboImg from '../../../public/hbomax.png';
import paramountImg from '../../../public/paramount.jpeg';
import primeImg from '../../../public/prime.png';
import appleImg from '../../../public/appletv.jpg';

import { IPlatformProps } from './@interfaces';

export default function Platform({ movies, movieIndex, handleMovie }: IPlatformProps) {
  function noPlatform() {
    const hasPlatform = movies[movieIndex].properties.Netflix.checkbox
    || movies[movieIndex].properties.Prime.checkbox
    || movies[movieIndex].properties['AppleTV+'].checkbox
    || movies[movieIndex].properties['Disney+'].checkbox
    || movies[movieIndex].properties['HBO Max'].checkbox
    || movies[movieIndex].properties['Paramount+'].checkbox;

    return !hasPlatform;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl text-white text-center">Plataforma(s):</h2>
      <div className="flex flex-col justify-center items-center mt-2">
        <ul className="flex flex-row justify-center items-center">
          <PlatformsList
            image={netflixImg}
            isVisible={movies[movieIndex].properties.Netflix.checkbox}
            title="Netflix"
          />
          <PlatformsList
            image={primeImg}
            isVisible={movies[movieIndex].properties.Prime.checkbox}
            title="Prime Video"
          />
          <PlatformsList
            image={disneyImg}
            isVisible={movies[movieIndex].properties['Disney+'].checkbox}
            title="Disney+"
          />
          <PlatformsList
            image={hboImg}
            isVisible={movies[movieIndex].properties['HBO Max'].checkbox}
            title="HBO Max"
          />
          <PlatformsList
            image={paramountImg}
            isVisible={movies[movieIndex].properties['Paramount+'].checkbox}
            title="Paramount+"
            height="96"
            width="96"
          />
          <PlatformsList
            image={appleImg}
            isVisible={movies[movieIndex].properties['AppleTV+'].checkbox}
            title="Apple TV+"
            height="96"
            width="96"
          />

          {noPlatform() && (
          <PlatformsList
            isVisible
            noPlatform
          />
          )}
        </ul>
        <button
          onClick={handleMovie}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          Buscar Novo Filme
        </button>
      </div>
    </div>
  );
}
