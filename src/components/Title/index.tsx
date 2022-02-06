import { ITitleProps } from './@interfaces';

export default function Title({ title }: ITitleProps) {
  return (
    <h1 className="text-4xl text-white text-center ml-8">
      {title}
    </h1>
  );
}
