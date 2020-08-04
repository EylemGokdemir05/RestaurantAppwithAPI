import React from 'react'
import {TextInput,View, Text} from 'react-native'

import styles from '../styles'

const SearchRes=props=>{
    return(
        <View style={styles.searchRes.searchcontainer}>
        <TextInput
        onChangeText={props.onSearchRes}
        placeholder="Restoran Ara">
        </TextInput>
        </View>
    )
}
export {SearchRes}