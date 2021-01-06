import React, { useEffect, useState } from 'react'
import {
    Button,
    FlatList,
    Text,
    TextInput,
    View
} from 'react-native'
import SearchComponent from '../searchResult/searchresult'
const Home = () => {
    const [searchData, SetsearchData] = useState([]);
    const [minicard ,setMiniCard] = useState([])
    const [value, setValue] = useState("")
    const fetchData = () => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${value}&type=video&key=AIzaSyBnpmpWM8ztn6w8UoJjVk0L6N71Jd4Gink`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setLoading(false)
                // dispatch({type:"add",payload:data.items})
                setMiniCard(data.items)
            })
           
    }
    return (
        <View>
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                placeholder="search for results"
                style={{ fontSize: 18, width: '70%', borderWidth: 1, marginTop: 20, marginLeft: 20 }}
                value={value}
                onChangeText={(text) => setValue(text)}
            />
            <View style={{ width: '20%', marginTop: 25, marginLeft: 10 }}>
                <Button
                    title="Search"
                    onPress={() => { fetchData() }}

                />
            </View>
        </View>
        <View>
            <FlatList
             data ={minicard}
             renderItem={({item})=>{
                return <SearchComponent
                 videoId={item.id.videoId}
                 title={item.snippet.title}
                 channel={item.snippet.channelTitle}
                />
            }}
            keyExtractor={item=>item.id.videoId}
            />
        </View>
        </View>
    )
}
export default Home