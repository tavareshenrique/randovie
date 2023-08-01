import { ITitleProps } from './@interfaces';

export function Title({ title, originalTitle, description }: ITitleProps) {
  return (
    <section className="flex flex-col items-center justify-center mx-10 mt-4 md:mx-96">
      <h1 className="text-center text-white md:text-4xl sm:text-2xl">
        {title}
      </h1>

      <h2 className="mt-2 text-lg font-bold text-center text-gray-400">
        {originalTitle}
      </h2>

      <p className="mt-2 leading-6 text-center text-gray-50">{description}</p>
    </section>
  );
}
