import { Text, View, StatusBar } from 'react-native';
import { useState } from 'react';
import MovieList from './components/MovieList';
import data from '../data.json';
import { colors } from './theme';
import MovieDetails from './components/MovieDetails';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <StatusBar barStyle="light-content" />
      {selectedMovie
        ? <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        : <MovieList movies={data.movies} onSelect={selectMovieHandler} />
      }


    </View>
  );
}

