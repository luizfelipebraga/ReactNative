import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';



const ImageDetail = ({ title, imageSource, score }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.images} source={imageSource} alt={title} />
            <View style ={styles.flexTexts}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}> A nota da imagem é {score}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    images: {
        margin: 5,
        width: 200
    },

    text: {
        marginLeft: 30
    },
    
    flexTexts : {
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default ImageDetail;