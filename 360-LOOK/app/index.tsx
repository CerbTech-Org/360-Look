import {StyleSheet, Text, View, Button, Image, Pressable} from "react-native";
import { useThemeColors } from "./hooks/useThemeColors";
import {Link} from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import SimpleForm from "./login";
import Headbar from "./appbar";
import { Directions } from "react-native-gesture-handler";
import N_button from "./button"
import Sub from "./sub_index";
import { useState } from "react";
const styles = StyleSheet.create({
  container: {
  },
  appbar: {
    padding: 24,
    fontSize: 40,
    fontWeight: 'bold'
  },
  image: {
    height: 60,
    width: 80,
    marginLeft: 70,
    marginTop: 50
  },
  look:{
    shadowOffset: {
      width: 1,
      height: 9,
    },
    shadowOpacity: 0.1,
    width: 400,
    shadowColor: 'black',
    display: 'flex',
    flexDirection: 'row',
  },
  button_op:{
    display: 'flex',
    flexDirection: 'row',
    textDecorationLine: 'underline',
    borderBottomWidth: 1,
    textDecorationColor: "Black",
    borderColor:'black',
    borderTopWidth: 13,
    borderTopStartRadius: 9,
    borderTopEndRadius: 9,
    opacity: 0.1,
    width: 500,
    position: 'absolute',
    marginTop: 220
  },
  button:{
    marginTop: 42,
    display: 'flex',
    flexDirection: 'row',
    textDecorationLine: 'underline',
    borderBottomWidth: 1,
    textDecorationColor: "Black",
    borderBottomEndRadius: 55,
    borderBottomStartRadius: 35,
  },
  return_text:{
    color: '#3399FF',
    fontSize: 50,
    marginLeft: 75,
    marginTop: 20
  },
  subtitle3: {
    fontSize: 10,
    lineHeight: 16
  },
  headline: {
  opacity: 0.4,
  fontSize: 24,
  lineHeight: 32,
  fontWeight: "bold",
  padding: 20,
  marginLeft: 25
},
})
export default function Index() {
  const colors = useThemeColors()
  const name = "360\nLOOK"
  const [re_des, setre] = useState("Entrez vos informations de\nconnexion")
  const [mess, setme] = useState("De Retour?")
  var log = "Connexion"
  const color_arr = [
    ["white",
    "#3399FF"],
    ["black",
    "white"]
  ]
  const [num1, setone] = useState(0);
  const [num2, settwo] = useState(1);
  const [num3, setth] = useState(1);
  function change_color(){
    var a = num1
    setone(num2)
    settwo(a)
      setme("Bienvenue!")
      setre("Remplissez ce formulaire pour créer votre compte")
      setth(0)
  }
  function change_color2(){
    var a = num1
    setone(num2)
    settwo(a)
    
    setme("De retour?")
    setre("Entrez vos informations de\nconnexion")
    setth(1)
  }
  return (
    <SafeAreaView style={styles.container}>
          {/* <Headbar/> */}
          <View style={styles.look}>
            <Image source={require('@/assets/images/sat.png')} style={styles.image}/>
            <Text style={styles.appbar}>{name}</Text>
          </View>
        <View style={styles.button_op}></View>
        <SafeAreaView style={styles.button}>
          <Pressable onPress={change_color2}>
            <N_button description="Connexion" color={color_arr[num1][0]} left={50} back={color_arr[num1][1]} wid={120}/>
          </Pressable>
          <Pressable onPress={change_color}>
            <N_button description="Inscription" left={40} color={color_arr[num2][0]} back={color_arr[num2][1]} wid={120}/>
          </Pressable>
        </SafeAreaView>
        <View>
          <Text style={styles.return_text}>{mess}</Text>
          <Text style={styles.headline}>{re_des}</Text>
            <SimpleForm which={num3}/>     
        </View>
      {/* <View>
        
      </View> */}
    </SafeAreaView>
  );
}


// {/* <Link href="/Home" style={styles.menu_text}>Weather</Link>
// <Link href="/News" style={styles.menu_text}>News</Link>
// <Link href="/About" style={styles.menu_text}>About Us</Link>
// <Link href="/Liked" style={styles.menu_text}>Saw</Link> */}