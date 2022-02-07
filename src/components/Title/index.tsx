import { ITitleProps } from './@interfaces';

export default function Title({ title, originalTitle }: ITitleProps) {
  return (
    <section className="flex flex-col justify-center items-center ">
      <h1 className="text-4xl text-white text-center ml-8">
        {title}
      </h1>

      <h4 className="text-gray-400 font-bold text-center ml-8 mt-2">{originalTitle}</h4>
    </section>
  );
}
