import { GetServerSideProps } from 'next';

import { BrowserView } from 'react-device-detect';

import notion from '../services/notion';

import Container from '../components/Container';
import Title from '../components/Title';
import Duration from '../components/Duration';
import Platform from '../components/Platform';

import { IHomeProps, IMovie } from '../@interfaces/pages/Home/IHomeProps';
import Cover from '../components/Cover';

export default function Home({ movie }: IHomeProps) {
  const {
    title, cover, duration, platforms,
  } = movie;

  return (
    <Container>
      <BrowserView>
        <Cover cover={cover} title={title} />
      </BrowserView>

      <section className="flex flex-col justify-center items-center border-separate">
        <Title title={title} />
        <Duration duration={duration} />
        <Platform
          platforms={platforms}
        />
      </section>

    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const randomMovie = response.results[randomNumber] as unknown as IMovie;

  console.log('randomMovie', randomMovie);

  const movie = {
    title: randomMovie.properties.Name.title[0].plain_text,
    cover: randomMovie.cover.external.url,
    platforms: randomMovie.properties['Watch in'].multi_select,
    duration: randomMovie.properties.Duração.rich_text[0].plain_text,
  };

  return {
    props: {
      movie,
    },
  };
};
