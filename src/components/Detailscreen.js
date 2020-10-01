import React from 'react'
import {StyleSheet, View , Image} from 'react-native' 
export function DetailScreen ({route}) {
    const {regularUrl} = route.params

    return (
        <View style={styles.container}>
            <Image source={{uri: regularUrl}} style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    img : {
        width: '100%',
        height: '100%'
    }
}) 