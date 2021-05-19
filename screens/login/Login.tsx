import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text,  
Image, TouchableOpacity, Alert,StatusBar,TextInput,ScrollView,SafeAreaView } from 'react-native';  
import {Splash} from '../splash/Splash';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export const Login=()=>{
  return( 
    <View style = { styles.MainContainer }>  
  <SafeAreaView style = { styles.MainContainer }>

        <View style={{flex:0.9}}>

            <StatusBar
        hidden={true}
        backgroundColor="transparent"
        translucent={true}/>
               <Text style={{marginTop:120,textAlign:'center',fontSize:50,color:"black",fontWeight:'bold'}}>Fit Club</Text>
               <Text style={{marginTop:5,textAlign:'center',fontSize:25,color:"#203354",fontWeight:'normal'}}>Fitter, Healthier, Happier</Text>
               <Text style={{marginTop:50,textAlign:'center',fontSize:20,color:"#203354",fontWeight:'bold'}}>User Login</Text>

               <TextInput 
          style={styles._numberInput} 
          blurOnSubmit placeholder="Username" 
          placeholderTextColor='lightgray'></TextInput>
           <TextInput 
          style={styles._passwordInput} 
          blurOnSubmit placeholder="Password" 
          placeholderTextColor='lightgray'></TextInput>
          <TouchableOpacity style={styles._btnSubmit}>
            <Text style={{color:'white',fontSize:16,alignSelf:'center',fontWeight:'normal'}}>LOGIN</Text>
          </TouchableOpacity>


                     </View>
                     <View style={{flex:0.1}}>
                     <Text style={{fontSize:18,color:"black",fontWeight:'normal',alignContent:'flex-start',marginLeft:20}}>Don't have account?</Text>
                     <Text style={{fontSize:18,color:"#203354",fontWeight:'bold',alignContent:'flex-start',marginTop:5,marginLeft:20}}>SIGNUP</Text>

                       </View>
                       </SafeAreaView>
           </View>  
     );  
}
const styles = StyleSheet.create(  
{  
   MainContainer:  
   {  
       flex: 1,  
       height:responsiveHeight(100),
       width:responsiveWidth(100),
       backgroundColor:'white',
       paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
   },  
   _btnSubmit:{
    height:50,
    alignSelf:'center',
    width:'70%',
    backgroundColor:'#203354',
    borderRadius:27,
    margin:25,
    fontSize:16,
    justifyContent:'center',
    alignItems: 'center',
  },
  _numberInput:{
    height:50,
    alignSelf:'center',
    width:'70%',
    marginTop:40,
    textAlign:'center',
    backgroundColor:'#ffffff00',
    borderRadius:27,
    borderColor:'lightgray',
    borderWidth:2,
    paddingLeft:10,
    fontSize:18,
    marginHorizontal:20,
    color:'lightgray'
  
  },
  _passwordInput:{
    height:50,
    alignSelf:'center',
    width:'70%',
    marginTop:25,
    textAlign:'center',
    backgroundColor:'#ffffff00',
    borderRadius:27,
    borderColor:'lightgray',
    borderWidth:2,
    paddingLeft:10,
    fontSize:18,
    marginHorizontal:20,
    color:'lightgray'
  
  },
});  

