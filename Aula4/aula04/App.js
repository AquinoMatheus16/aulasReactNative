/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RotasPublicas } from './src/routes/rotasPublicas';

export const App = () => {
  return (
    <NavigationContainer>
      <RotasPublicas />
    </NavigationContainer>
  );
};


// TERCEIRA
// import { useEffect, useState } from 'react';
// import { View, StyleSheet, FlatList, Text, Button } from 'react-native';
// import { getTasks } from './src/services/tasksClient';
// import { Card } from './src/components/Card';
// import {Home} from '';

// export const App = () => {
//   const [nome, setNome] = useState('REACT NATIVE');
//   const [tasks, setTasks] = useState([]);

//   // const getTasks = async () => {
//   //   const { data } = await api.get('/tasks');
//   //   console.log(data);
//   //   setTasks(data);
//   // };

//   const fetchData = async () => {
//     const taskList = await getTasks();
//     setTasks(taskList);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [nome]);

//   // useEffect(() => {
//   //   // alert('USE EFFECT');
//   //   // getTasks();
//   //   featchData();
//   // }, [nome]);

//   // useEffect(() => {
//   //   alert('USE EFFECT');
//   // }, [nome]);

//   return (
//     <View style={styles.container}>
//       {/* { DATA.map( item => <Text key={item.id} style={styles.texto}>{item.title}</Text>) } */}
//       <FlatList
//         data={tasks}
//         keyExtractor={item => item.id}
//         renderItem={Card}
//       // renderItem={({ item }) => (
//       // <>
//       //     <Text style={styles.texto}>{item.titulo}</Text>
//       //     <Button title="DELETAR" onPress={() => setNome(nome + 'a')} />
//       // </>
//       // )}
//       />
//       <Text style={styles.texto}>{nome}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#131313',
//   },
//   texto: {
//     color: '#fff',
//   },
// });

// PRIMEIRA PARTE DA AULA
// /* eslint-disable react/react-in-jsx-scope */
// import {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
// } from 'react-native';

// export const App = () => {
//   const [nome, setNome] = useState('REACT NATIVE');
//   const [nomeInput, setNomeInput] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.texto}>{nome}</Text>
//       <TextInput
//         placeholder="Digite seu nome"
//         onChangeText={setNomeInput}
//         value={nomeInput}
//       />
//       <TouchableOpacity style={styles.botao} onPress={() => setNome(nomeInput)}>
//         <Text>CLIQUE AQUI</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   botao: {
//     backgroundColor: 'lightblue',
//     padding: 15,
//     borderRadius: 15,
//     marginTop: 16,
//   },
//   texto: {
//     fontSize: 36,
//   },
// });
