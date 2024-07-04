import { StyleSheet } from "react-native";
import SearchIcon from "../Icons/SearchIcon";
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchButton() {
    return (
        <LinearGradient
            useAngle={true}
            angle={152.72}
            locations={[0.017, 1.1452]}
            colors={['#34C8E8', '#4E4AF2']}
            style={styles.gradient}
        >
            <SearchIcon />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
