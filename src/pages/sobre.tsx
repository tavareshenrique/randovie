import { GetStaticProps } from 'next';
import Link from 'next/link';

export default function Sobre() {
  return (
    // alling bellow div in center with space in right and left
    <main className="flex flex-col items-center justify-center w-full gap-10 px-80 py-80">
      <li className="absolute top-0 right-0 mt-4 mr-4 list-none">
        <ul className="flex flex-row gap-4 text-white">
          <Link href="/" passHref>
            <a className="text-xl font-bold text-center text-zinc-200 hover:text-blue-500">
              Home
            </a>
          </Link>
        </ul>
      </li>

      <h1 className="text-5xl font-bold text-center text-zinc-200">
        O que é o Randovie? 🎬
      </h1>

      <p className="text-lg leading-8 text-center text-gray-100 whitespace-break-spaces">
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
