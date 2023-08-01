import PlatformsList from './PlatformsList';

import { IPlatformProps } from './@interfaces';

import styles from './style.module.css';

export function Platform({ platforms }: IPlatformProps) {
  return (
    <section className="mt-4">
      <h2 className="text-xl font-bold text-center text-white">
        Plataforma(s):
      </h2>
      <div className="flex flex-col items-center justify-center mt-2">
        <ul className="flex flex-row items-center justify-center">
          {platforms.length <= 0 ? (
            <li className={`${styles.platform__list} mt-4`}>
              <span className="text-white">Não disponível</span>
            </li>
          ) : (
            <>
              {platforms.map((platform) => (
                <PlatformsList key={platform.name} platform={platform} />
              ))}
            </>
          )}
        </ul>
      </div>
    </section>
  );
}
