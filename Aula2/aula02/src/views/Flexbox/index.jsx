
// ======================= Desafio professor =======================
import { StyleSheet, Text, View } from "react-native";

export const Flexbox = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.texto}>FLEXBOX</Text> */}
            <View style={styles.containerColuna}>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
            </View>
            <View style={styles.containerColuna}>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
            </View>
            <View style={styles.containerColuna}>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
                <View style={styles.meio}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection:'row',
        backgroundColor: "#131313"
    },
    containerColuna: {
        flex: 1,
        justifyContent: "space-around",
        alignItems:'center',
        backgroundColor: "#972222"
    },
    texto: {
        color: '#fff',
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 100
    },
    superior: {
        height: 100,
        width: 100,
        // width: '100%',
        backgroundColor: '#07d7ee'
    },
    meio: {
        height: 100,
        width: 100,
        backgroundColor: '#0c0ce9',
        alignSelf: 'baseline'


    },
    meioSub: {
        height: 100,
        width: 100,
        backgroundColor: '#ee0a87',
        // alignSelf:'flex-end'
    },
    inferior: {
        height: 100,
        width: 100,
        backgroundColor: '#ed620b'
    }

})
// // ======================= Desafio =======================
// import { StyleSheet, Text, View } from "react-native";

// export const Flexbox = () => {
//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.texto}>FLEXBOX</Text> */}

//             <View style={styles.superior}></View>
//             <View style={styles.superior}></View>
//             <View style={styles.superior}></View>

//             <View style={styles.meio}></View>
//             <View style={styles.meio}></View>
//             <View style={styles.meio}></View>

//             <View style={styles.meioSub}></View>
//             <View style={styles.meioSub}></View>
//             <View style={styles.meioSub}></View>

//             <View style={styles.inferior}></View>
//             <View style={styles.inferior}></View>
//             <View style={styles.inferior}></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: "wrap",
//         justifyContent: 'space-around',
//         alignContent: "space-around",
//         backgroundColor: "#131313"
//     },
//     texto: {
//         color: '#fff',
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 100
//     },
//     superior: {
//         height: 100,
//         width: 100,
//         // width: '100%',
//         backgroundColor: '#07d7ee'
//     },
//     meio: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#0c0ce9',
//         alignSelf: 'baseline'


//     },
//     meioSub: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#ee0a87',
//         // alignSelf:'flex-end'
//     },
//     inferior: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#ed620b'
//     }

// })


// ======================= Exercício 5 =======================
// import { StyleSheet, Text, View } from "react-native";

// export const Flexbox = () => {
//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.texto}>FLEXBOX</Text> */}

//             <View style={styles.meio}></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection:'row',
//         justifyContent: 'flex-end',
//         alignItems: 'flex-end',
//         backgroundColor: "#131313"
//     },
//     texto: {
//         color: '#fff',
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 100
//     },
//     superior: {
//         height: 100,
//         width: 100,
//         // width: '100%',
//         backgroundColor: '#d91313'
//     },
//     meio: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#3edc17',
//         // alignSelf:'flex-end'
//     },
//     inferior: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#0b9eed'
//     }

// })

// ======================= Exercício 4 =======================
// import { StyleSheet, Text, View } from "react-native";

// export const Flexbox = () => {
//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.texto}>FLEXBOX</Text> */}

//             <View style={styles.superior}></View>
//             <View style={styles.meio}></View>
//             <View style={styles.inferior}></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection:'row',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//         backgroundColor: "#131313"
//     },
//     texto: {
//         color: '#fff',
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 100
//     },
//     superior: {
//         height: 100,
//         width: 100,
//         // width: '100%',
//         backgroundColor: '#d91313'
//     },
//     meio: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#3edc17',
//         // alignSelf:'flex-end'
//     },
//     inferior: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#0b9eed'
//     }

// })

// ======================= Exercício 3 =======================
// import { StyleSheet, Text, View } from "react-native";

// export const Flexbox = () => {
//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.texto}>FLEXBOX</Text> */}

//             <View style={styles.meio}></View>
//             <View style={styles.inferior}></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // flexDirection:'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: "#131313"
//     },
//     texto: {
//         color: '#fff',
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 100
//     },
//     superior: {
//         height: 50,
//         width: 50,
//         // width: '100%',
//         backgroundColor: '#d91313'
//     },
//     meio: {
//         height: 50,
//         width: 100,
//         backgroundColor: '#3edc17',
//         // alignSelf:'flex-end'
//     },
//     inferior: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#0b9eed'
//     }

// })


// ======================= Exercício 2 =======================
// import { StyleSheet, Text, View } from "react-native";

// export const Flexbox = () => {
//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.texto}>FLEXBOX</Text> */}

//             <View style={styles.meio}></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         backgroundColor: "#131313"
//     },
//     texto: {
//         color: '#fff',
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 100
//     },
//     superior: {
//         height: 50,
//         width: 50,
//         // width: '100%',
//         backgroundColor: '#d91313'
//     },
//     meio: {
//         height: 100,
//         width: '100%',
//         backgroundColor: '#3edc17',
//         // alignSelf:'flex-end'
//     },
//     inferior: {
//         height: 150,
//         width: 150,
//         backgroundColor: '#0b9eed'
//     }

// })

// ======================= EXERCÍCIO 1 =======================
// import { StyleSheet, Text, View } from "react-native";

// export const Flexbox = () => {
//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.texto}>FLEXBOX</Text> */}

//             <View style={styles.meio}></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: "#131313"
//     },
//     texto: {
//         color: '#fff',
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 100
//     },
//     superior: {
//         height: 50,
//         width: 50,
//         // width: '100%',
//         backgroundColor: '#d91313'
//     },
//     meio: {
//         // height: '100%',
//         flex: 1,
//         backgroundColor: '#3edc17',
//         width: '30%',
//         // alignSelf:'flex-end'
//     },
//     inferior: {
//         height: 150,
//         width: 150,
//         backgroundColor: '#0b9eed'
//     }

// })


// ======================= Aula =======================
// import { StyleSheet, Text, View } from "react-native";

// export const Flexbox = () => {
//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.texto}>FLEXBOX</Text> */}

//             <View style={styles.superior}></View>
//             <View style={styles.meio}></View>
//             <View style={styles.inferior}></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // flexDirection:'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         backgroundColor: "#131313"
//     },
//     texto: {
//         color: '#fff',
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 100
//     },
//     superior: {
//         height: 50,
//         width: 50,
//         // width: '100%',
//         backgroundColor: '#d91313'
//     },
//     meio: {
//         height: 100,
//         width: 100,
//         backgroundColor: '#3edc17',
//         // alignSelf:'flex-end'
//     },
//     inferior: {
//         height: 150,
//         width: 150,
//         backgroundColor: '#0b9eed'
//     }

// })