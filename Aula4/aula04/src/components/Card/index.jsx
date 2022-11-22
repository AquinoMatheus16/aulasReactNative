import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const navigation = useNavigation();

export const Card = ({ item }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detalhes')} style={styles.taskContainer}>
            <Text style={styles.texto}>{item.titulo}</Text>
        </TouchableOpacity>
    );
};
