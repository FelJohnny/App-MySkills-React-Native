import React from "react";
import  { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


// type ButtonProps = TouchableOpacityProps;
interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({title, ...rest }: ButtonProps){
    return(
    <TouchableOpacity 
        style={styles.button}
        // onPress={onPress}
        {...rest}
        >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
)}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'teal',
        padding: 15,
        borderRadius:7,
        alignItems:'center',
        marginTop:10
    },
    buttonText:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'  
    },
})