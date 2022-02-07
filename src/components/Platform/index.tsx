import PlatformsList from './PlatformsList';

import { IPlatformProps } from './@interfaces';

import styles from './style.module.css';

export default function Platform({ platforms }: IPlatformProps) {
  return (
    <div className="mt-4 ml-8">
      <h2 className="text-xl text-white text-center">Plataforma(s):</h2>
      <div className="flex flex-col justify-center items-center mt-2">
        <ul className="flex flex-row justify-center items-center">
          {platforms.length <= 0 ? (
            <li className={`${styles.platform__list} mt-4`}>
              <span className="text-white">Não disponível</span>
            </li>
          ) : (
            <>
              {platforms.map((platform) => (
                <PlatformsList
                  key={platform.name}
                  platform={platform}
                />
              ))}
            </>
          )}

        </ul>
      </div>
    </div>
  );
}
