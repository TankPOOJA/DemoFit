import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text,  
Image, TouchableOpacity, Alert,StatusBar } from 'react-native';  
import {Splash} from '../splash/Splash';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export class Welcome extends Component<{}>  

{  
  constructor(){  
    super();  
    this.state={  
    isVisible : true,  
   }  
 }  
  Hide_Splash_Screen=()=>{  
   this.setState({   
     isVisible : false   
   });  
 }  
  
 componentDidMount(){  
   var that = this;  
   setTimeout(function(){  
     that.Hide_Splash_Screen();  
   }, 2000);  
  }  
  
   render()  
   {  
    const {navigate} = this.props.navigation;

        return(  
            <View style = { styles.MainContainer }>  
            <StatusBar
        hidden={true}
        backgroundColor="transparent"
        translucent={true}/>
               <Text style={{marginTop:150,textAlign:'center',fontSize:35,color:"black",fontWeight:'normal'}}>Welcome to</Text>
               <Text style={{marginTop:140,textAlign:'center',fontSize:70,color:"black",fontWeight:'bold'}}>Fit Club</Text>
               <Text style={{marginTop:5,textAlign:'center',fontSize:25,color:"#203354",fontWeight:'normal'}}>Fitter, Healthier, Happier</Text>
               
               <View style={{width:responsiveWidth(100),flexDirection:'row',justifyContent:'center',marginTop:80}}>
               <TouchableOpacity style={styles._btnSubmit}>
            <Text style={{color:'white',fontSize:16,alignSelf:'center',fontWeight:'normal'}}>SIGNUP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles._btnSubmit}
          onPress={()=>navigate('Login')}>
            <Text style={{color:'white',fontSize:16,alignSelf:'center',fontWeight:'normal'}}>LOGIN</Text>
          </TouchableOpacity>
          </View>
               
               
                {  
                 (this.state.isVisible === true) ? <Splash/> : null  
               }  
           </View>  
             );  
   }  
}  
const styles = StyleSheet.create(  
{  
   MainContainer:  
   {  
       flex: 1,  
       height:responsiveHeight(100),
       width:responsiveWidth(100),
       paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
   },  
   _btnSubmit:{
    height:35,
    alignSelf:'center',
    width:'25%',
    backgroundColor:'#203354',
    borderRadius:27,
    margin:25,
    fontSize:16,
    justifyContent:'center',
    alignItems: 'center',
  },

});  

