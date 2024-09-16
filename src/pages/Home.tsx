import React,{useEffect, useState} from "react";
import { Button } from "../components/Button/Button";
import { SkillCard } from "../components/SkillCard/SkillCard";
import { 
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    FlatList,
 } from "react-native";

 interface SkillData {
    id: string;
    name:string;
    date?:Date; //com o '?' a inferencia não é obrigatória
 }


function Home(){
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [greetings, setGreetings] = useState('')

    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill,
            date: new Date(new Date().getDate())
        }
        setMySkills(oldSkills => [...oldSkills, data])
    }

    function handleRemoveSkill(id:string){
        setMySkills(oldSkills => oldSkills.filter(
            skill => skill.id !==  id
        ))
    }

    useEffect(()=>{
        const currentHours = new Date().getHours()
        console.log(currentHours);
        if(currentHours < 12){
            setGreetings('Bom dia')
        }else if(currentHours >= 12 && currentHours < 18){
            setGreetings('Boa tarde')
        }else{
            setGreetings('Boa noite')
        }
    },[])

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Johnny</Text>
            <Text style={styles.greetings}>
                {greetings}
            </Text>
            <TextInput 
                style={styles.input}
                placeholder="Nova Skill"
                placeholderTextColor={'#555'}
                onChangeText={setNewSkill}
                />
            <Button 
                onPress={handleAddNewSkill}
                activeOpacity={0.7}
                title="Add"
            />
            <Text style={[styles.title, {marginVertical:30}] }>
                Minhas habilidades
            </Text>
            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <SkillCard 
                    skill={item.name}
                    activeOpacity={0.5}
                    onPress={()=>handleRemoveSkill(item.id)}
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
    greetings:{
        color:'#fff'
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