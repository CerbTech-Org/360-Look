import { useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Weather from "./components/Weather"
import { API_KEY } from './utils/WeatherAPIKey';
import React from "react";
import Geolocation from '@react-native-community/geolocation';
type My_State = {
    isLoading: boolean,
    temperature: number,
    weatherCondition: null,
    error: null
  };

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };
  componentDidMount() {
      Geolocation.getCurrentPosition(
        position => {
          this.fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
          this.setState({
            error: 'Error Gettig Weather Condtions'
          });
        }
      );
    }
    fetchWeather(lat = 25, lon = 25) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
      )
        .then(res => res.json())
        .then(json => {
          this.setState({
            temperature: json.main.temp,
            weatherCondition: json.weather[0].main,
            isLoading: false
          });
        });
    }
    render (){
      const {isLoading} = this.state;
    return (
        <View style={styles.container}>
          {isLoading ? (
            <View>
              <Text>
              Fetching The Weather
              </Text>
            </View>
          )
          : (
              <Weather/>
          )}
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      padding: 0
    }
  })