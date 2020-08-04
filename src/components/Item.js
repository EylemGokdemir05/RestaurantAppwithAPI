import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import styles from '../styles'

const Item = props =>{
    return(
        <TouchableOpacity style={styles.item.container} onPress={props.onCitySelect}>
        <Text style={styles.item.cityName}>{props.data}</Text>
        </TouchableOpacity>
    )
}
export {Item}