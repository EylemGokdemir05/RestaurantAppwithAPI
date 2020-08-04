import React from 'react'
import {SafeAreaView,Text,TextInput,View} from 'react-native'

import styles from '../styles'

const SearchBar=props=>{
    return(
        <View style={styles.searchBar.container}>
        <TextInput
        onChangeText={props.onSearch}
        placeholder="Şehir Ara"
        />
        </View>
    )
}
export {SearchBar}