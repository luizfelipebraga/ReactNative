import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = () => {
    return (
        <View style={styles.containerSearch}>
            <View style={styles.boxSearch}>
                <Feather  name="search" size={25} />
                <TextInput style={styles.inputSearch} placeholder="Search"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerSearch: {
        backgroundColor: '#F0EEEE',
        height: 30,
        borderRadius: 5,
        marginTop: 15,
        marginHorizontal: 20,
    },

    boxSearch:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconStyle :{
        fontSize: 35,
        alignItems: 'center',
    },

    inputSearch:{
        flex: 1,
        marginHorizontal: 10,
        fontSize:35,
        alignItems: 'center',
    },
})


export default SearchBar;