/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Gatinho } from './components/Gatinho';

export default function App() {

  const handlePress = () => {
    // eslint-disable-next-line no-sequences
    console.log('Pressionei'),
      // eslint-disable-next-line no-alert
      alert('Pressionei');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World!!</Text>
      <Gatinho nome="Fubá" />
      <Button onPress={handlePress} title="clique aqui" color="#215491" />
      <TouchableOpacity onPress={() => handlePress()} style={styles.botao}>
        <Text style={styles.texto}>Touchable Opacity</Text>
      </TouchableOpacity>
    </View>
  );
}
