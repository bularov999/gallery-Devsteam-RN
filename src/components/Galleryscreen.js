import React, {useEffect, useState} from 'react'
import {StyleSheet , FlatList , ActivityIndicator , View} from 'react-native'
import {connect } from 'react-redux'

import {fetchImages} from '../store/actions/fetchImageActions'
import { ListItem } from './ListItem'

 function GalleryScreen({navigation, fetchImages,isFetching, data}) {

    useEffect(()=> {
            fetchImages()
    },[])


    const goToImageScreen = (regularUrl) => {
        return navigation.navigate('Image', {regularUrl})
    }

    const _rendrerItem = ({item}) => {
        return (
        <ListItem 
            id = {item.id}
            thumbnailUrl = {item.urls.full}
            regularUrl = {item.urls.regular}
            authorName = {item.user.name}
            navigate = {goToImageScreen}
        />)
}
    if (isFetching) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator style={styles.loader} size="large" animating/>
            </View>
        )
    }
    else {
        return (

            <View style={styles.container}>
                <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={_rendrerItem}
                />
            </View>
        ) 
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        width:'100%'
    },
    loader: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = state => ({
    isFetching: state.fetchImagesData.isFetching,
    data: state.fetchImagesData.apiData,
})

export default  connect(mapStateToProps , {fetchImages})(GalleryScreen)

