import { GetStaticProps } from 'next';

import { House } from 'phosphor-react';

import { Navigation } from '../components';

export default function Sobre() {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-10 px-80 py-80 sm:px-10 sm:py-40">
      <Navigation to="/">
        <House size={40} />
      </Navigation>

      <h1 className="text-5xl font-bold text-center sm:text-2xl text-zinc-200">
        O que é o Randovie? 🎬
      </h1>

      <p className="text-lg leading-8 text-center text-gray-100 sm:leading-9 sm:text-base whitespace-break-spaces">
        O <b>Randovie</b> é um projeto open source onde ele consome a API do
        Notion para buscar filmes aleatórios. {'\n'}O projeto foi criado para
        ser um exemplo de como consumir a API do Notion usando Next.js e
        TypeScript. {'\n'}Você pode ver o código fonte do projeto no GitHub:{' '}
        <a
          href="https://github.com/tavareshenrique/randovie"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Randovie
        </a>
        {'\n'} Os filmes exibidos são alguns filmes que eu tenho interesse de
        assistir algum dia, tem ótimos filmes e péssimos filmes, então
        divirta-se.
        {'\n'}Caso queira ver a lista de filmes no Notion:{' '}
        <a
          href="https://henriquetavares.notion.site/783712d0042f4e9a9dd32104ccc9a2a9?v=768e151966094d428cd2183b91a98131&pvs=4"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Lista de Filmes
        </a>
      </p>
    </main>
  );
}

export const getStaticProps: GetStaticProps = (ctx) => {
  return {
    props: {},
  };
};
