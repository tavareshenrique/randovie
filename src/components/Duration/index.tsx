import { IDurationProps } from './@interfaces';

export function Duration({ duration }: IDurationProps) {
  return (
    <section className="flex flex-row justify-center items-center mt-4">
      <p className="text-white text-lg font-bold">Duração:</p>
      <p className="text-white ml-2 text-lg">
        {duration}
      </p>
    </section>
  );
}
