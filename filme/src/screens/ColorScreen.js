import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    return (
        <View>

            <TouchableOpacity style={styles.botaoCor}
            onPress={() => {setColors([...colors, randomColor()])}}>
                <Text>add a new color</Text>
            </TouchableOpacity>

            <View style={{height:100, width:100, backgroundColor: randomColor() }}/>
            
            <FlatList 
            style={styles.List} 
            keyExtractor={item => item} 
            data={colors} renderItem={({ item }) => {return <View style={{height:100, width:100, backgroundColor: item }}/> }}
            >
            </FlatList>

        </View>
    );
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const yellow = Math.floor(Math.random() * 256);

    return `rgb(${red}), ${green}, ${blue}, ${yellow})`;
};

const styles = StyleSheet.create({
    botaoCor: {

    },
    List : {

    }
})

export default ColorScreen;