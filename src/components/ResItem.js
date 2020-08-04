import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'

import styles from '../styles'

const ResItem=({data,onResSelect})=>{
    return(
        <TouchableOpacity style={styles.resItem.container} onPress={onResSelect}>
        <Image style={styles.resItem.image} source={require('../assets/resicon.png')}></Image>
            <Text style={styles.resItem.nameText}>{data.name}</Text>
            <Text style={styles.resItem.otherText}>{data.address}</Text>
            <Text style={styles.resItem.otherText}>{data.area}</Text> 
        </TouchableOpacity>
    )
}
export {ResItem}