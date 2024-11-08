import {StyleSheet, Text, View, Button, Image} from "react-native";
import { useThemeColors } from "./hooks/useThemeColors";
import {Link} from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "./components/card";
import SimpleForm from "./subscribe";
import Headbar from "./appbar";
import { Directions } from "react-native-gesture-handler";
import N_button from "./button"
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
    borderBottomStartRadius: 75,
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
  fontSize: 22,
  lineHeight: 32,
  fontWeight: "bold",
  padding: 20,
  marginLeft: 25
},
})
export default function Sub() {
  const colors = useThemeColors()
  const name = "360\nLOOK"
  const re_des = "Remplissez ce formulaire pour créer votre compte"
  var log = "Connexion"
  return (
    <SafeAreaView style={styles.container}>
          {/* <Headbar/> */}
          <View style={styles.look}>
            <Image source={require('@/assets/images/sat.png')} style={styles.image}/>
            <Text style={styles.appbar}>{name}</Text>
          </View>
        <View style={styles.button_op}></View>
        <SafeAreaView style={styles.button}>
        <Link href={"/"} style={{
          marginLeft: 80
        }}>
          <N_button description="Connexion" color="black" left={30} back="white" wid={120}/>
          </Link>
          <N_button description="Inscription" left={30} color="white" back="#3399FF" wid={120}/>
        </SafeAreaView>
        <View>
          <Text style={styles.return_text}>Bienvenue!</Text>
          <Text style={styles.headline}>{re_des}</Text>
        </View>
        <SimpleForm/>
      {/* <View>
        
      </View> */}
    </SafeAreaView>
  );
}


// {/* <Link href="/Home" style={styles.menu_text}>Weather</Link>
// <Link href="/News" style={styles.menu_text}>News</Link>
// <Link href="/About" style={styles.menu_text}>About Us</Link>
// <Link href="/Liked" style={styles.menu_text}>Saw</Link> */}