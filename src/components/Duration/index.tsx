import { IDurationProps } from './@interfaces';

export default function Duration({ duration }: IDurationProps) {
  return (
    <div className="flex flex-row justify-center items-center mt-4 ml-8">
      <p className="text-white text-lg">Duração:</p>
      <p className="text-white ml-2 text-lg">
        {duration}
      </p>
    </div>
  );
}
