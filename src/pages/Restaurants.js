import React,{useEffect,useState} from 'react'
import {SafeAreaView,Text,View,FlatList,ActivityIndicator, TouchableOpacity} from 'react-native'
import axios from 'axios'
import {ResItem, SearchRes} from '../components'

const Restaurants=props=>{

    const [originalList,setOriginalList]=useState([])
    const [resList,setResList]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        fetchRes()
    },[])

    const fetchRes = async () =>{
        let {data}=await axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${props.route.params.city}`)
        setResList(data.restaurants)
        setOriginalList(data.restaurants)
        setLoading(false)
    }

    const renderRes = ({item})=>{
        console.log(item)
        return(
            <ResItem 
            data={item}
            onResSelect={()=>resSelect(item)}/>
        )
    }

    function resSelect(res){
        props.navigation.navigate("DetailsPage",{resID:res.id})
    }

    const searchRes=(text)=>{
        let filteredList=originalList.filter((item)=>{
            const itemData=item.name.toUpperCase()
            const textData=text.toUpperCase()

            return itemData.indexOf(textData)>-1
        })
        setResList(filteredList)
    }

    return(
        <SafeAreaView style={{flex:1}}>
        <SearchRes onSearchRes={searchRes}/>
        {
            loading ?
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large'/>
            </View>
            :
            <FlatList
            keyExtractor={(item,index)=>index.toString()}
            data={resList}
            renderItem={renderRes}>
            </FlatList>
        }
        </SafeAreaView>
    )
}
export {Restaurants}