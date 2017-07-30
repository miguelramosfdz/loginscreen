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
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Loginform extends React.Component {
    render() {
        return (
            <View style={styles.loginformcontainer}>

                <TextInput underlineColorAndroid='transparent' placeholder='Email' style={styles.textinput} /> 
                <TextInput underlineColorAndroid='transparent' placeholder='Password' style={styles.textinput} /> 

                <TouchableOpacity style={styles.loginbutton}>
                     <Text>LOG IN</Text>
                </TouchableOpacity>
             
                <TouchableOpacity style={styles.registerbutton}>
                     <Text>REGISTER</Text>
                </TouchableOpacity>
             
                <TouchableOpacity style={styles.forgotbutton}>
                     <Text>FORGOT PASSWORD</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginformcontainer: {
         alignItems: 'center', 
    },
    textinput: {
        color: '#fff',
        alignSelf: 'stretch',
        padding: 12,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        borderColor: '#fff',
        borderWidth: 0.6,
    },
    loginbutton: {
        backgroundColor: '#ecf0f1',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
    },
    registerbutton: {
        backgroundColor: '#bdc3c7',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
    },
    forgotbutton: {
        backgroundColor: '#e74c3c',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
    }

});


/*
 * EOF: loginform.js
 */
