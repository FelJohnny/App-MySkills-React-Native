import React,{useState} from "react";
import { 
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    FlatList
 } from "react-native";
import { Button } from "../components/Button/Button";
import { SkillCard } from "../components/SkillCard/SkillCard";


function Home(){
    const [newSkill, setNewSkill] =useState('')
    const [mySkills, setMySkills] =useState([])

    function handleAddNewSkill(){
        setMySkills(oldSkills => [...oldSkills, newSkill])
        
    }

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Johnny</Text>
            <TextInput 
                style={styles.input}
                placeholder="Nova Skill"
                placeholderTextColor={'#555'}
                onChangeText={setNewSkill}
                />
            <Button onPress={handleAddNewSkill}/>
            <Text style={[styles.title, {marginVertical:30}] }>
                Minhas habilidades
            </Text>
            <FlatList 
                data={mySkills}
                // keyExtractor={item => item}
                renderItem={({item, index})=>(
                    <SkillCard 
                    skill={item}
                    i={index}
                    />
                )}
                showsVerticalScrollIndicator={false}
                
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#121015',
        paddingVertical: 20,
        paddingHorizontal:30,
    },
    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold',
    },
    input:{
        backgroundColor:'#1f1e25',
        color:'#fff',
        fontSize:18,
        padding: Platform.OS === 'ios' ? 16 : 15,
        marginTop:30,
        borderRadius:7,
    },
});

export default Home