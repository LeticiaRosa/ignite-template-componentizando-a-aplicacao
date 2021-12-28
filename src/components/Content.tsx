import { MovieCard } from './MovieCard';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface ContentProps {
  id: number;
  name: string;
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
}

export function Content(props: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [genres, setGenres] = useState<ContentProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<ContentProps>({} as ContentProps);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${props.id}`).then(response => {
      setMovies(response.data);
    });

    api.get<ContentProps>(`genres/${props.id}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [props.id]);

  return (
  <div className="container">
  <header>
    <span className="category">Categoria:<span> {props.name}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>
  )
}