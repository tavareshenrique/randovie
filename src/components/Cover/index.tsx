import { ICoverProps } from './@interfaces';

function Cover({ cover, title }: ICoverProps) {
  return (
    <div className="border-r-4 border-indigo-500">
      <img
        src={cover}
        alt={title}
        height={350}
        width={450}
        className="rounded-2xl mr-8 "
      />
    </div>
  );
}

export default Cover;
