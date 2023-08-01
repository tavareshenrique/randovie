import { IDurationProps } from './@interfaces';

export function Duration({ duration }: IDurationProps) {
  return (
    <section className="flex flex-row items-center justify-center mt-4">
      <p className="text-lg font-bold text-white">Duração:</p>
      <p className="ml-2 text-lg text-white">{duration}</p>
    </section>
  );
}
