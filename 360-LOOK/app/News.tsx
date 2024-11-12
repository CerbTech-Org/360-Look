import {Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NEWS_API_KEY } from "./news_api";

export const getNews = async (category, page, setArticles, setTotalResult) => {
    try {
        const apiKey = NEWS_API_KEY;
        const apiUrl = 
`https://newsapi.org/v2/everything?q=tesla&from=2024-10-11&sortBy=publishedAt&apiKey=73513c99ed07442c8549d6d39334e075`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod && data.cod !== 200) {
            throw new Error(data.message || 'Failed to fetch weather data');
        }
        setArticles(data.articles);
        setTotalResult(data.totalResults);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        Alert.alert('Error', 'Failed to fetch weather data. Please try again.');
    }
};