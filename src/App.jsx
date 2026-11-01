import { Text, View, StatusBar } from 'react-native';
import { useState } from 'react';
import MovieList from './components/MovieList';

import { colors } from './theme';
import MovieDetails from './components/MovieDetails';
import { MovieProvider } from './contexts/MovieContext';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <MovieProvider>
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <StatusBar barStyle="light-content" />
        {selectedMovie
          ? <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
          : <MovieList  onSelect={selectMovieHandler} />
        }
      </View>
    </MovieProvider>
  );
}

