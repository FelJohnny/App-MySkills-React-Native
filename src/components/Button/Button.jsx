import React from "react";
import  { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({onPress}){
    return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Adicionar</Text>
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