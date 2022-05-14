import { ICoverProps } from './@interfaces';

function Cover({ cover, title, loading }: ICoverProps) {
  return (
    <div className="md:mr-8 md:border-r-4 md:border-blue-500 sm:mb-2">
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
          height={280}
          width={280}
          className="rounded-2xl md:mr-8 "
        />
      )}

    </div>
  );
}

export default Cover;
