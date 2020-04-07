import React from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import backImg from '../../assets/back.jpeg'

import styles from "./styles";
import api from '../../services/api'

export default function Home(){
    const navigation = useNavigation();

    function navigateToMeal(){
      navigation.navigate('meal');
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={backImg} style={styles.image}>
              <View style={styles.header}>
                <Text style={styles.headerText1}>
                  Welcome to, 
                </Text>

                <Text style={styles.headerText2}>
                  <Text style={styles.headerTextBold}>Chef </Text> Random
                </Text>
              </View>
            </ImageBackground>
                    
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
            Click the button to generate a recipe at random!
            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={navigateToMeal} >
            <Feather name="plus" size={45} color="#000"/>
          </TouchableOpacity>             
        </View>
    );
}