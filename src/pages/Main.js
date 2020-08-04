import React,{useState,useEffect} from 'react'
import {SafeAreaView, View, FlatList, ActivityIndicator} from 'react-native'
import axios from 'axios'
import styles from '../styles'
import { Item } from '../components/Item'
import { SearchBar } from '../components/SearchBar'

const Main = props => {

    const [originalList,setOriginalList]=useState([])
    const [cityList,setCityList]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        try {
            let {data}=await axios.get("https://opentable.herokuapp.com/api/cities")
            setCityList(data.cities)
            setOriginalList(data.cities)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const renderCities= ({item})=>{
        return(
            <Item
            data={item}
            onCitySelect={()=>citySelect(item)}/>
        )
    }

    function citySelect(city){
        props.navigation.navigate("RestaurantsPage",{city:city})
    }

    const searchCity=(text)=>{
        let filteredList=originalList.filter((item)=>{
            const itemData=item.toUpperCase()
            const textData=text.toUpperCase()

            return itemData.indexOf(textData)>-1
        })
        setCityList(filteredList)
    }

    return(
        <SafeAreaView style={styles.main.container}>
        <SearchBar onSearch={searchCity}/>
        {
            loading ?
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large'/>
            </View>
            :
            <FlatList
            numColumns={2}
            keyExtractor={(item,index)=>index.toString()}
            data={cityList}
            renderItem={renderCities}>
            </FlatList>
        }
        </SafeAreaView>
    )
}
export {Main}