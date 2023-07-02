import React from 'react';

interface IGenreProps {
  genres: {
    id: string;
    name: string,
  }[]
}

export function Genres({ genres }: IGenreProps) {
  function randonColor() {
    const colors = [
      'bg-red-200',
      'bg-blue-200',
      'bg-green-200',
      'bg-yellow-200',
      'bg-pink-200',
      'bg-purple-200',
      'bg-indigo-200',
    ];

    const randomNumber = Math.floor(Math.random() * colors.length);

    return colors[randomNumber];
  }

  return (
    <div className="flex flex-row flex-wrap justify-center items-center mt-4">
      {genres.map((genre) => (
        <span
          key={genre.id}
          className={`${randonColor()} font-bold py-2 px-4 rounded-full text-xs mr-2 mb-2`}
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
}
