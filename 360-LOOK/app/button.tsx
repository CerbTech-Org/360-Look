import {Text, StyleSheet} from "react-native";

var styles = StyleSheet.create({
    form: {
        backgroundColor: 'white',
        width: 130,
        height: 45,
        fontSize: 22,
        borderRadius: 12,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: 'blue',
        color: 'black',
        textAlign: 'center',
        marginLeft: 20
    }
})

type ButtonProps = {
    description: string;
    color: string;
    left: number;
    back: string;
    wid: number
};

const N_button = (props: ButtonProps) => {
    return(
        <Text style={{
            backgroundColor: props.back,
            width: props.wid,
            height: 45,
            fontSize: 22,
            borderRadius: 12,
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: '#3399FF',
            color: props.color,
            textAlign: 'center',
            marginLeft: props.left
        }}>{props.description}</Text>
    );
}

export default N_button;
