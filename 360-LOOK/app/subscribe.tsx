import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import N_button from './button';

const my_style = StyleSheet.create({
  form: {
    borderRadius: 18,
    width: 300,
    height: 70,
    textAlign: 'left',
    borderColor: 'black',
    paddingHorizontal: 54,
    borderWidth: 1
  },
  image: {
    width: 40,
    height: 30,
    marginTop: 21,
    position: 'absolute',
    left: 7
  },
  pad: {
    width: 40,
    height: 40,
    marginTop: 15,
    position: 'absolute',
    left: 3
  },
  hide: {
    width: 40,
    height: 40,
    marginTop: 15,
    position: 'absolute',
    right: 7
  },
  hide2: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 7,
    zIndex: 1
  },  
  bloc1: {
    marginTop: 45,
    display: 'flex',
    flexDirection: 'row'
  },
  bloc2: { 
    marginTop: -10,
    display: 'flex',
    flexDirection: 'row'
  },
  look:{
    backgroundColor: "white",
    display: 'flex',
    flexDirection: 'column',
  },
})


const Subscribe = () => {
  var close_eye="@/drawable/les-yeux-croises.png"
  const [bo, setbo] = useState(true);
  const [pos, setPos] = useState(0);
  var req_array = [require("@/drawable/les-yeux-croises.png"), require("@/drawable/oeil.png")]

  function change(){
    if (pos == 0){
      setPos(pos + 1)  
      setbo(false)
      }
    else{
      setPos(pos - 1)
      setbo(true)
    }
  }
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can perform further actions with the form data, like sending it to a server
  };
  return (
    <View>
    
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>
      <Controller
        control={control}
        name="fieldName"
        render={({ field }) => (
          <View style={my_style.look}>
            <View style={my_style.bloc2}>
              <Image style={my_style.image} source={require('@/drawable/mess.png')}></Image>
            <TextInput
              {...field}
              style={my_style.form}
              placeholder="Email"
              textContentType='emailAddress'
              // Add other TextInput props as needed
            />
            </View>
            <View style={my_style.bloc1} >
              <Image style={my_style.pad} source={require('@/drawable/cadenas.png')}></Image>
              <Pressable  style={my_style.hide2} onPress={change}>
                <Image style={my_style.hide} source={req_array[pos]}></Image>
              </Pressable>
            <TextInput
             {...field}
              style={my_style.form}
              placeholder="Password"
              secureTextEntry={bo}
              textContentType='password'
              // Add other TextInput props as needed
            />
            </View>
          </View>
        )}
      />
    </View>
        <Text style={styles.link2}>Mot de passe oublié?</Text>
    <View style={styles.link}>
        <N_button  wid={300} description="Se connecter" left={-40} color="white" back="#3399FF"/>
        {/* <Button  title="Login" onPress={handleSubmit(onSubmit)}/> */}
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '70%',
    height: 40
  },
  link: {
    marginTop: 40,
    marginLeft: 85
  },
  link2: {
    marginTop: 200,
    marginLeft: 205,
    color: '#3399FF'
  }
});

export default Subscribe;