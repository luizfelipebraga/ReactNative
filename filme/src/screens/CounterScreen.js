import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CounterScreen = () => {
    const [count, setCount] = useState(0);

    return (

        <View style={styles.container}>
            <TouchableOpacity
                style={styles.funcionalidadesContainer}
                onPress={() => { setCount(count + 1); }}>
                <Text style={styles.textFuncionalidadesContainer}>Incrementar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.funcionalidadesContainer}
                onPress={() => { setCount(count - 1); }}>
                <Text style={styles.textFuncionalidadesContainer}>Descrementar</Text>
            </TouchableOpacity>

            <Text style={styles.container}>Current Count: {count}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },

    funcionalidadesContainer: {
        margin: 20
    },

    textFuncionalidadesContainer: {
        fontSize: 20
    }


})

export default CounterScreen;