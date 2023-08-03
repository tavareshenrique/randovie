import Link from 'next/link';

import { INavigationProps } from './@interfaces';

export function Navigation({ children, to }: INavigationProps) {
  return (
    <li className="absolute top-0 right-0 mt-4 mr-4 list-none">
      <ul className="flex flex-row gap-4 text-white">
        <Link
          href={to}
          className="text-xl font-bold text-center sm:text-sm text-zinc-200 hover:text-blue-500"
        >
          {children}
        </Link>
      </ul>
    </li>
  );
}
