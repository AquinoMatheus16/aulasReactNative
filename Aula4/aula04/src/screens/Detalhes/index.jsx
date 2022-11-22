import { Text, TouchableOpacity, View, StyleSheet } from "react-native"

export const Detalhes = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Detalhes</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.botaoTexto}>IR PARA HOME</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 26
    },
    botao: {
        backgroundColor: '#0911ed',
        borderRadius: 15,
        padding: 16,
        width: '80%'
    },
    botaoTexto: {
        color: '#fff',
        textAlign: 'center',
    }
})