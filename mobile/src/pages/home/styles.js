import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#d2dddf',
  },

  fundo: {
    resizeMode: "cover",
    justifyContent: "center",
    height: '100%',
    width: '100%',
  },

  image: {
    resizeMode: "cover",
    justifyContent: "center",
    height: 200,
    backgroundColor: '#000'
  },

  header:{
    marginLeft: '3%',
    marginTop: 100,
  },

  headerText1: {
    fontSize: 25,
    color: "#000",
  },

  headerText2: {
    fontSize: 25,
    color: "#000",
  },

  headerTextBold:{
    fontWeight: 'bold',
    color: "#fccc00",
    fontSize: 30
  },

  description:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginTop: 100,
    backgroundColor: 'rgba(163, 202, 202, 0.5)',
    borderRadius: 20,
    height: 80,
  },

  descriptionText:{
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },

  button:{
    borderWidth:0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginLeft: '35%',
    backgroundColor: "#fccc00",
    height: 120,
    width:120,
    borderRadius: 30,
    borderColor:'#fccc00',
  },


});