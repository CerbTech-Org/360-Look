import React from 'react';
import { View, Text, StyleSheet, Image,TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from './utils/WeatherConditions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';

const my_style = StyleSheet.create({
  form: {
    borderRadius: 18,
    width: 300,
    height: 70,
    textAlign: 'left',
    borderColor: 'black',
    paddingHorizontal: 54,
    borderWidth: 1,
    backgroundColor: 'white'
  },
  image: {
    width: 40,
    height: 30,
    marginTop: 105,
    right: 57,
    position: 'absolute',
    zIndex: 1
  },
  bloc2: { 
    marginTop: -30,
    display: 'flex',
    flexDirection: 'row',
    padding: 54,
    position: 'absolute',
  }
})
const Look = ({ weather, temperature }) => {
  const path = {
    Clouds: require('@/assets/images/Clouds.jpg'),
    Haze: require('@/assets/images/Haze.jpg'),
    Drizzle: require('@/assets/images/Drizzle.jpg'),
    Mist: require('@/assets/images/Mist.jpg'),
    Snow: require('@/assets/images/Snow.jpg'),
    Raining: require('@/assets/images/Rain.jpg'),
    THunderStorm: require('@/assets/images/Thunderstorm.jpg')
  }
  const { control, handleSubmit } = useForm();
  return (
    <View
      style={[
    styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color }
      ]}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
      {/* <View style={my_style.bloc2}>
              <Image style={my_style.image} source={require('@/drawable/search.png')}></Image>
            <TextInput
              style={my_style.form}
              placeholder="Search"
              textContentType='emailAddress'
              // Add other TextInput props as needed
            /></View> */}
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <SafeAreaView style={{
        position: 'absolute',
        marginTop: 250
      }}>
      <Image style={{
          width: 400,
          height: 400
        }}source={path[weatherConditions[weather].title]}></Image>
      </SafeAreaView>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Look;