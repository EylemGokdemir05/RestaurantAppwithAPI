import React,{useState,useEffect} from 'react'
import {SafeAreaView,View,Text,Image,ActivityIndicator,TouchableOpacity,Linking} from 'react-native'
import axios from 'axios'
import { DetailsItem } from '../components'

const Details=props=>{

    const [resDetails,setResDetails]=useState({})
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        fetchDetails()
    },[])

    const fetchDetails=async()=>{
        console.log(props.route.params.resID)
        try {
            let {data}=await axios.get(`https://opentable.herokuapp.com/api/restaurants/${props.route.params.resID}`)
            console.log(data)
            setResDetails(data)
            setLoading(false)
        } catch (error) {
            console.log(error.response)
        }
        
    }

    return(
        <SafeAreaView style={{flex:1}}>
        {
            loading ?
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large'/>
            </View>
            :
            <View>
                <DetailsItem data={resDetails} />
                <View style={{alignItems:'center',justifyContent:'flex-end'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL(resDetails.mobile_reserve_url)}>
                    <Text style={{marginBottom:10,color:'#263238',fontWeight:'500'}}> Rezervasyon Yaptır</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
        </SafeAreaView>
    )
}
export {Details}