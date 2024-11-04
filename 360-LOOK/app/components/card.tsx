import {View, type ViewProps, type ViewStyle} from "react-native";
import { shadows} from "../../constants/Shadows"
type Props = ViewProps

export function Card ({style, ...rest}: Props){
    return <View style={[style, styles]} {...rest}/>
}

const styles = {
    backgroundColor: "#FFF",
    borderRadius: 8,
    ...shadows.dp2
} satisfies ViewStyle