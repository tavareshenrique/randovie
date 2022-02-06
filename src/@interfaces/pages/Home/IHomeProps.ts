/* eslint-disable camelcase */
import { MovieType } from '../../../@types/pages/Home/Movies';

export interface IHomeProps {
  movie: MovieType;
}

export interface IMovie {
  cover: {
    external: {
      url: string;
    }
  },
  properties: {
    'Watch in': {
      multi_select: string[]
    },
    'Duração': {
      rich_text: {
        plain_text: string
      }[]
    }
    Name: {
      title: {
        plain_text: string
      }[]
    }
  }
}
