import {StyleSheet,Dimensions,Appearance} from 'react-native'

const themeColor=Appearance.getColorScheme()

const styles={
    main: StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:themeColor === 'light' ? 'white' : '#2f3542'
        }
    }),
    item: StyleSheet.create({
        container:{
            borderRadius:10,
            margin:5,
            padding:10,
            width:Dimensions.get("window").width/2.1,
            height:Dimensions.get("window").height/12,
            backgroundColor: themeColor === 'light' ? '#ff6f00' : '#57606f'
        },
        cityName:{
            fontSize:20,
            fontWeight:'900',
            fontStyle:'italic',
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            color: themeColor === 'light' ? 'black' : 'white'
        }
    }),
    searchBar : StyleSheet.create({
        container:{
            backgroundColor: '#ffcc80',
            margin:10,
            padding:5,
            borderRadius:10,
            elevation:5
        }
    }),
    resItem : StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#ff6f00',
            margin:2,
            padding:5,
            borderRadius:10
        },
        image : {
            width:400,
            height:400,
            borderRadius:10
        },
        nameText:{
            color:'black',
            fontSize:20,
            fontWeight:'bold'
        },
        otherText:{
            color:'black',
            fontSize:15,
            fontWeight:'normal'
        }
    }),
    searchRes : StyleSheet.create({
        searchcontainer:{
            backgroundColor: '#ffcc80',
            margin:10,
            padding:5,
            borderRadius:10,
            elevation:5
        }
    }),
    detailsItem : StyleSheet.create({
        container:{
            backgroundColor:'#fbe9e7',
            alignSelf:'center',
            marginTop:10
        },
        image:{
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontWeight:'bold',
            alignSelf:'center'
        }
    })
}
export default styles