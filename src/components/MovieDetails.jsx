import { StyleSheet, View, Image, Text } from 'react-native';
import MovieDetailsRow from './MovieDetailsRow';
import { colors } from '../theme';
import { formatDuration } from '../utils/dateTimeUtils';
import GenreTags from './GenreTags';

export default function MovieDetails({
    movie
}) {
    return (
        <View style={styles.content}>
            <Image
                source={{ uri: movie.posterUrl }}
                style={styles.poster}
            />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.meta}>{movie.year} • {formatDuration(movie.durationMinutes)} • {movie.genre}</Text>

            <View style={styles.genres}>
                <GenreTags
                    genre={movie.genre}
                />
            </View>
            <View style={styles.infoBox}>
                <MovieDetailsRow
                    label="Режисьор"
                    value={movie.director}
                />
                 <View style={styles.rowDivider} />
                <MovieDetailsRow
                    label="Година"
                    value={movie.year}
                />
                <View style={styles.rowDivider} />
                <MovieDetailsRow
                    label="Времетраене"
                    value={formatDuration(movie.durationMinutes)}
                />
                <View style={styles.rowDivider} />
                <MovieDetailsRow
                    label="Жанр"
                    value={movie.genre}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 56,
        paddingHorizontal: 20,
        paddingBottom: 40,
        alignItems: 'center',
    },
    topBar: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    backButton: {
        backgroundColor: colors.card,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    backText: {
        color: colors.text,
        fontSize: 15,
    },
    poster: {
        width: 220,
        height: 330,
        borderRadius: 16,
        marginBottom: 24,
    },
    title: {
        color: colors.text,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    meta: {
        color: colors.accent,
        fontSize: 15,
        marginTop: 8,
    },
    genres: {
        marginTop: 16,
        marginBottom: 28,
    },
    infoBox: {
        alignSelf: 'stretch',
        backgroundColor: colors.card,
        borderRadius: 16,
        paddingHorizontal: 16,
    },
        rowDivider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
});
