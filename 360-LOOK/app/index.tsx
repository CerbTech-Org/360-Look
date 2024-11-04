import {StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./components/ThemedText";
import { useThemeColors } from "./hooks/useThemeColors";
import {Link} from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "@/app-example/hooks/useThemeColor";
import { Card } from "./components/card";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E847F',
    display: 'flex',
    flex: 1,
    padding: 24
  },
  menu_text: {
    marginLeft: 40
  }
})
export default function Index() {
  const colors = useThemeColors()
  return (
    <SafeAreaView style={styles.container}>
        <Card>
          <ThemedText variant="headline">360-Look</ThemedText>
        </Card>
        <SafeAreaView>
        <Link href="/Home" style={styles.menu_text}>Weather</Link>
        <Link href="/News" style={styles.menu_text}>News</Link>
        <Link href="/About" style={styles.menu_text}>About Us</Link>
        <Link href="/Liked" style={styles.menu_text}>Saw</Link>
      </SafeAreaView>
    </SafeAreaView>
  );
}

