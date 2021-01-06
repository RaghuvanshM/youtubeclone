import React from 'react'
import {
Text,
View,
Button,
Image
} from 'react-native'
const Searchresult =(props)=>{
    console.log(props)
    const url = `https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg`
    console.log(url)
    return(
        <View style={{flexDirection:'row',marginTop:30}}>
            <Image 
             source={{uri:url}}
             style={{height:200,width:300}}
            />
            <View>
                <Text>RAGHUVANSH MANI</Text>
            </View>
        </View>
    )
}
export default Searchresult;