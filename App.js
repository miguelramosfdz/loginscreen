/* 
 * Project: React Native Tutorial - Create & Design a Login Screen
 * YouTube: https://www.youtube.com/watch?v=RUndpKV0TJA
 *
 * Author : Fullstack Development - https://www.youtube.com/channel/UCNpIE11a9nLW_s2GUWmksqw
 *
 * Logos  : https://icons8.com/icon/
 * Images : https://www.pexels.com/ 
 * 
 */

import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Loginform from './app/components/loginform';

export default class App extends React.Component {
    render() {
        return (

           <Image source={require('./app/img/pexels-photo-268533.jpeg')} style={styles.container}>
               <View style={styles.logocontainer}>
                   <Image source={require('./app/img/icons8-Peptide-50.png')} style={styles.logo} />
               </View>
           
               <Loginform />

           </Image>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        width: null,
        padding: 20,
    },

    logocontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 140,
        height: 140,

    }
});


/*
 * EOF: App.js
 */
