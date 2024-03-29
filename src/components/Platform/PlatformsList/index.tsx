import Image from 'next/image';

import netflixImg from '../../../../public/netflix.png';
import disneyImg from '../../../../public/disney.png';
import starplusImg from '../../../../public/starplus.png';
import hboImg from '../../../../public/hbomax.png';
import paramountImg from '../../../../public/paramount.jpeg';
import primeImg from '../../../../public/prime.png';
import appleImg from '../../../../public/appletv.jpg';
import telecineGloboplayImg from '../../../../public/telecineGloboplay.png';

import { IPlatformsListProps } from './@interfaces';

import styles from '../style.module.css';

export default function PlatformsList({ platform }: IPlatformsListProps) {
  function RenderComponent() {
    const { name } = platform;

    const platformToShow = {
      Netflix: netflixImg,
      'Prime Video': primeImg,
      'Disney+': disneyImg,
      'Star+': starplusImg,
      'HBO Max': hboImg,
      'Paramount+': paramountImg,
      'AppleTV+': appleImg,
      'Globoplay / Telecine': telecineGloboplayImg,
    };

    if (platformToShow[name]) {
      return (
        <li className={styles.platform__list}>
          <Image
            src={platformToShow[name]}
            alt={name}
            height="64"
            width="64"
            className="rounded-2xl"
          />
          <span className="text-sm text-white">{name}</span>
        </li>
      );
    }

    return (
      <li className={`${styles.platform__list} mt-4`}>
        <span className="text-red-800">Não disponível</span>
      </li>
    );
  }

  return <RenderComponent />;
}
