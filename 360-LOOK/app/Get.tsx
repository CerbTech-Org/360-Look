// Weather.js

import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import { styles } from './styles';
import { getNews } from './News';
import Look from "./components/myWeather"
import NewsItem from './NewsItem';
import { SafeAreaView } from 'react-native-safe-area-context';
const News = () => {
    const [category, setCategory] = useState("general");
    const [articles, setArticles] = useState([]);
    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        const fetchNews = () => getNews(category, totalResult, setArticles, setTotalResult);
        // Fetch data initially
        fetchNews();
        const intervalId = setInterval(fetchNews, 300000); 
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [])
    return (
        <ScrollView style={{
            width: "100%",
            height: "100%"
        }}>
        {articles.map((element) => {
            return (
                    <NewsItem title={element.title} description={element.description} url={element.urlToImage} name={element.source.name}/>
            )   
        })}
        </ScrollView>
    )
};



export default News;
