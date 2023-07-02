/* eslint-disable camelcase */
import { MovieType, TGenre } from '../../../@types/pages/Home/Movies';

export interface IHomeProps {
  movie: MovieType;
  movies: MovieType[];
}

export interface IMovie {
  cover: {
    external?: {
      url: string;
    }
    file?: {
      url: string;
    }
  },
  properties: {
    'Watch on': {
      multi_select: string[]
    },
    'Duration': {
      rich_text: {
        plain_text: string
      }[]
    }
    Name: {
      title: {
        plain_text: string
      }[]
    },
    i18n: {
      rich_text: {
        plain_text: string
      }[]
    },
    Sinopse: {
      rich_text: {
        plain_text: string
      }[]
    },
    Genre: {
      multi_select: TGenre[]
    }
  }
}
