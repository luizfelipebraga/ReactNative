import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageScreen } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageTela = () => {
    return (
        <View style={styles.container}>
            <View>
                <ImageDetail title="forest" imageSource={require('../../assets/img/forest.jpg')} score={9} />
                <ImageDetail title="beach" imageSource={require('../../assets/img/beach.jpg')} score={8} />
                <ImageDetail title="montanha" imageSource={require('../../assets/img/mountain.jpg')} score={7} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ImageTela;