import { Text, View } from 'react-native';
import { colors } from '../theme';
import MovieCard from './MovieCard';


export default function MovieList({
    movies
}) {
    return (
        <View>
            <Text style={{ color: colors.text, fontSize: 24, margin: 50 }}>Каталог Филми</Text>
            <MovieCard
                {...movies[0]}
            />
        </View>
    );
}