import { isMobile } from 'react-device-detect';

import { ICoverProps } from './@interfaces';

function Cover({ cover, title, loading }: ICoverProps) {
  return (
    <div>
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="spinner-border text-blue-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <p className="text-center text-blue-500">Carregando...</p>
        </div>
      ) : (
        <img
          src={cover}
          alt={title}
          height={isMobile ? 280 : 480}
          width={isMobile ? 280 : 480}
          className="rounded-2xl md:mr-86"
        />
      )}
    </div>
  );
}

export default Cover;
