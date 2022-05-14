import { ITitleProps } from './@interfaces';

export default function Title({ title, originalTitle }: ITitleProps) {
  return (
    <section className="flex flex-col justify-center items-center ">
      <h1 className="md:text-4xl sm:text-2xl text-white text-center md:ml-8">
        {title}
      </h1>

      <h4 className="text-gray-400 font-bold text-center md:ml-8 mt-2">{originalTitle}</h4>
    </section>
  );
}
