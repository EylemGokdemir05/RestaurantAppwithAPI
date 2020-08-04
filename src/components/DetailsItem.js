import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from '../styles'

const DetailsItem=props=>{
    return(
        <View style={styles.detailsItem.container}>
            <Image style={styles.detailsItem.image} source={require('../assets/resicon.png')}></Image>
            <Text style={styles.detailsItem.text}>{props.data.name}</Text>
            <Text style={{alignSelf:'center'}}>Phone: {props.data.phone}</Text>
        </View>
    )
}
export {DetailsItem}