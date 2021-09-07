import Image from 'next/image';

import { IPlatformsListProps } from './@interfaces';

import styles from './style.module.css';

export default function PlatformsList({
  isVisible, image, title, height = '104', width = '104', noPlatform = false,
}: IPlatformsListProps) {
  return (
    <>
      {isVisible && !noPlatform && (
        <li className={styles.platform__list}>
          <Image
            src={image}
            alt={title}
            height={height}
            width={width}
            className="rounded-2xl"
          />
          <span className="text-white">{title}</span>
        </li>
      )}

      {isVisible && noPlatform && (
        <li className={`${styles.platform__list} mt-4`}>
          <span className="text-white">Não disponível</span>
        </li>
      )}
    </>
  );
}
