import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#d2dddf'
  },

  header:{
    marginLeft: '3%',
    alignItems: 'flex-start',
  },

  headerText1: {
    fontSize: 20,
    textAlign: 'center'
  },

  description:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: '10%',
  },

  action:{
    marginLeft: '2%',
  },

  actionButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fccc00",
    marginTop: 25,
    marginLeft: 10,
    height: 40,
    width: 80,
    borderRadius: 12,
  },

  actionButtonText:{
    fontSize: 14,
    fontWeight: 'bold'
  },

  bodyList:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
    height: '100%'
  },

  body:{
    borderRadius: 8,
    marginBottom: 20,
  },

  ingredients:{
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  item: {
    marginTop: 5,
    fontSize: 15,
  },

  todo:{
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  bodyHeader:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: '3%',
    backgroundColor: '#fff'
  },

  bodyButton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fccc00",
    height: 30,
    width: 30,
    borderRadius: 50,
  },

  bodyTitle:{
    fontSize: 18,
    fontWeight: 'bold'
  },

  bodyText:{
    marginTop: 5,
    marginBottom: 10,
    marginLeft: '5%',
  },

  todoText1:{
    textAlign: 'justify',
    fontSize: 15
  },

});