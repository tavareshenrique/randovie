import Image from 'next/image';

import { base64Blur } from './utils/base64Blur';

import { ICoverProps } from './@interfaces';

export function Cover({ cover, title, loading }: ICoverProps) {
  return (
    <div className="flex justify-center  w-[360px] h-[240px]">
      <Image
        className="rounded-2xl"
        src={cover}
        alt={title}
        height={240}
        width={360}
        layout="fixed"
        quality={60}
        priority
        placeholder="blur"
        blurDataURL={base64Blur}
      />
    </div>
  );
}
