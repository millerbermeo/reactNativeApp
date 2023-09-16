import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableOpacity, Button, Text, View } from 'react-native';
import { styles } from './style';
import { Image } from '@rneui/themed';
import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';



export default function App() {



  return (
    <View style={styles.container}>
      {/* <Text style={styles.texto}> Miller App</Text> */}
      <StatusBar style="auto" backgroundColor='white' />
      {/* <TouchableOpacity style={styles.button} onPress={() => alert('Botón presionado')}>
        <Text style={styles.buttonText}>Canciones</Text>

      </TouchableOpacity> */}
      <Image
        source={require('./assets/fondoUno1.png')} // Ruta de la imagen
        style={styles.imgPrincipal}
      />

      <View style={styles.form}>
        <Text style={styles.login}>Login</Text>

        <Text style={styles.textInputs}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
        />
        <Text style={styles.textInputs}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
        />

        <View style={styles.btnOptions}>
          <View style={styles.check}>
            <CheckBox
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkColor="transparent"
            
            />
            <Text style={styles.remember}>Remember me</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{"SINGUP"}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textForgot}>Forgot Password?</Text>
      </View>

      <View style={styles.texLine}>
        <View style={styles.line}></View>
        <Text style={styles.social}>Social Login</Text>
        <View style={styles.line}></View>
      </View>

      {/* <View style={styles.content}>
        <Text style={styles.text}>Create Account</Text>
      </View> */}

      <View style={styles.imageContent}>
        <Image
          source={require('./assets/facebook.webp')}
          style={styles.image}
        />
        <Image
          source={require('./assets/ins.png')}
          style={styles.image}
        />
        <Image
          source={require('./assets/twitter.png')}
          style={styles.image}
        />
        <Image
          source={require('./assets/linke.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.contentFooter}>
        <Text style={styles.textUser}>New User?</Text>
        <Text style={styles.singup}>Singup</Text>
      </View>

    </View>

  );
}


