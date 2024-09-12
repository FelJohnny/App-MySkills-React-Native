import React from "react";
import  { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkillCard({skill, i}){
    return(
    <TouchableOpacity
        style={styles.buttonSkill}
        key={i}
        >
            <Text style={styles.TextSkill}>
                {skill} 
            </Text>
    </TouchableOpacity>
)}

const styles = StyleSheet.create({
    buttonSkill:{
        backgroundColor:'#1f1e25',
        borderRadius:50,
        padding: 15,
        alignItems:'center',
        marginVertical:5
    },
    TextSkill:{
        color:'#fff',
        fontSize: 22,
        fontWeight:'bold',
    },
})