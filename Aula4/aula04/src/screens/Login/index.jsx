import { Button, StyleSheet, Text, View } from "react-native"

export const Login = ({ navigation }) => {
    return (
        <View>
            <Text>Login</Text>
            <Button title="ENTAR" onPress={() => navigation.vavigate('Privado')} />
        </View>
    );
};

// const styles= StyleSheet