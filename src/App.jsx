import { Text, View } from 'react-native';
import MovieList from './components/MovieList';
import data from '../data.json';
import { colors } from './theme';

export default function App() {
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <MovieList movies={data.movies} />
    </View>
  );
}

