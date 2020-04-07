import React, { useEffect, useState } from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { View, SectionList ,Image, Text, TouchableOpacity, Linking } from 'react-native';
import api from '../../services/api'

import styles from "./styles";
import { FlatList } from 'react-native-gesture-handler';

export default function Home(){
    const [meal, setMeal] = useState([]);

    const navigation = useNavigation();

    function navigateBack(){
      navigation.goBack();
    }

    async function loadMeal(){
      var response = await api.get('meal');

      setMeal(response.data)
    }

    useEffect(()=>{
      loadMeal()

    },[])

    function sendYouTube(){
      Linking.openURL(`${meal[0].video}`)
    }

    function sendSite(){
      Linking.openURL(`${meal[0].souce}`)
    }


    
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateBack} >
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchableOpacity> 

        <FlatList 
          data={meal}
          style={styles.bodyList}
          renderItem={({ item })=> (
            <View style={styles.body}>

              <View style={styles.header}>
                <Text style={styles.headerText1}>
                  {item.name}
                </Text>
              </View>
                            
              <View style={styles.description} >
                <Image source={{uri: `${item.image}`}} style={{
                  resizeMode: 'cover',
                  height: 160,
                  width: 160
                }} />

                <View  style={styles.action}>
                  <TouchableOpacity style={styles.actionButton} onPress={sendYouTube} >
                    <Feather name="youtube" size={12} color="#000" />
                    <Text style={styles.actionButtonText}> You Tube</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton} onPress={sendSite} >
                    <Feather name="terminal" size={12} color="#000" />
                    <Text style={styles.actionButtonText}> Site</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.ingredients}>
                <View style={styles.bodyHeader} >
                    <TouchableOpacity style={styles.bodyButton} onPress={()=>{}} >
                      <Feather name="list" size={15} color="#000" />
                    </TouchableOpacity>

                    <Text style={styles.bodyTitle}> Ingredients</Text>
                </View>

                <View style={styles.bodyText}>
                  <SectionList
                    sections={[
                      {data: item.ingredients},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    keyExtractor={(item, index) => index}
                  />
                </View>

              </View>

              <View style={styles.todo} >
                <View style={styles.bodyHeader}>
                  <TouchableOpacity style={styles.bodyButton} onPress={()=>{}} >
                    <Feather name="book-open" size={15} color="#000" />
                  </TouchableOpacity>

                  <Text style={styles.bodyTitle}> To Do</Text>
                </View>

                <View style={styles.bodyText}>
                  <Text style={styles.todoText1}> {item.instructions}</Text>
                </View>
              </View>
            </View>
        )}
        keyExtractor={item => item.id}
        />
    </View>
    );
}