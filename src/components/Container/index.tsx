import { IContainerProps } from './@interfaces';

export default function Container({ children }: IContainerProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
