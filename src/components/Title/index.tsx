import { ITitleProps } from './@interfaces';

export function Title({ title, originalTitle, description }: ITitleProps) {
  return (
    <section className="flex flex-col justify-center items-center mt-4 mx-10 md:mx-96">
      <h1 className="md:text-4xl sm:text-2xl text-white text-center">
        {title}
      </h1>

      <h2 className="text-gray-400 font-bold text-center mt-2">{originalTitle}</h2>

      <p className="text-gray-50 text-center mt-2 leading-6">{description}</p>
    </section>
  );
}
