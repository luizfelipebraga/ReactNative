import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friends ', age: 20, key: '1' },
        { name: 'Friends ', age: 21, key: '2' },
        { name: 'Friends ', age: 22, key: '3' },
        { name: 'Friends ', age: 24, key: '4' },
        { name: 'Friends ', age: 24, key: '5' },
        { name: 'Friends', age: 25, key: '6' },
    ];

    return (
        <FlatList
            data={friends}
            // esse render vai ser chamado com cada elemento individual
            renderItem={({ item }) => {
                //element === {item {name : 'Friends # 1' }, index : 0 }
                return (
                    <Text style={styles.ListScreen}>{item.name} - Age : {item.age}</Text>
                )
            }}
        />
    );
};

const styles = StyleSheet.create({
    ListScreen: {
        marginVertical: 50
    },
})

export default ListScreen;
