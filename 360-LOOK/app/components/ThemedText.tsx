import { useThemeColor } from "@/app-example/hooks/useThemeColor";
import { Text, StyleSheet, type TextProps} from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import { Colors } from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({
    body3: {
        fontSize: 10,
        lineHeight: 16
    },
    headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
        backgroundColor: "white"
    },
    caption: {
        fontSize: 8,
        lineHeight: 12
    },
    subtitle1: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold"
    },
    subtitle2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "bold"
    },
    subtitle3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "bold"
    }
})

type Props = TextProps & {
    variant ?: keyof typeof styles,
    color ?: keyof typeof Colors["light"]
}

// export function ThemedText ({variant, color, ...rest}: Props){
//     const colors = useThemeColors()
//     return <Text style={[styles[variant ?? 'body3'], {color: colors[color]}]} {...rest}/>
// }
