import {Text, Image, View, StyleSheet} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const my_style = StyleSheet.create({
    subtitle: {
        fontWeight: 'bold',
        fontSize: 25
    },
    description: {
        fontSize: 15
    },
    name:{
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
})


type myNews = 
{
    url: string,
    title: string,
    description: string,
    name: string
}

const NewsItem = (props: myNews) => {
    return (
    <SafeAreaView>
        <Image style={
            {
                zIndex: 1,
                width: 250,
                height: 250,
                marginLeft: 80
            }
        } source={{
            uri: props.url,
        }}/>
        <Text style={my_style.subtitle}>{props.title}</Text>
        <Text style={my_style.name}>{props.name}</Text>
        <Text style={my_style.description}>{props.description}</Text>
    </SafeAreaView>
    )
}

export default NewsItem