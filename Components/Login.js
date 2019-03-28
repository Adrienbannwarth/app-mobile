// // creer un compenent 
import React from 'react'
import { Font } from 'expo'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'

class Login extends React.Component {
     //   // methode obligatoire

     constructor(props) {
          super(props)
          this.state = {
               email: '',
               password: '',
               fontLoaded: false
          }
     }

     async componentWillMount() {
          await Font.loadAsync({
               'CenturyGothic': require('../fonts/CenturyGothic.ttf')
          });
          this.setState({ fontLoaded: true });
     }

     login = () => {
          const { email, password } = this.state;

          fetch('https://bellybump.fr/api/login_true.php', {
               method: 'POST',
               header: {
                    'Accept': 'application/Json',
                    'Content-type': 'application/Json'
               },
               body: JSON.stringify({
                    email: email,
                    password: password,
               })
          })
               .then((response) => response.json())
               .then((responseJson) => {
                    if (responseJson.success === true) {
                         this.props.navigation.navigate(("Dashboard"))
                    } else {
                         alert(responseJson.message)
                    }
               })
               .catch((error) => {
                    console.error(error);
               });

     }


     render() {
          return (


               <View style={styles.container}>
                    <Image
                         style={styles.img}
                         source={require('../img/login.jpg')}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                         <Image
                              style={styles.logo}
                              source={require('../img/logo.png')}
                         />
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column', }}>
                         {this.state.fontLoaded ? (
                              <TextInput
                                   placeholder="E-mail"
                                   placeholderTextColor="white"
                                   TextInput="rgba(255,255,255,0.5"
                                   onChangeText={email => this.setState({ email })}
                                   style={styles.input}
                              />
                         ) : (
                                   <ActivityIndicator size="large" />
                              )}

                         {this.state.fontLoaded ? (
                              <TextInput
                                   placeholder="Mot de passe"
                                   secureTextEntry={true}
                                   placeholderTextColor="white"
                                   TextInput="rgba(255,255,255,0.5"
                                   onChangeText={password => this.setState({ password })}
                                   style={styles.input}
                              />
                         ) : (
                                   <ActivityIndicator size="large" />
                              )}

                         <TouchableOpacity
                              onPress={this.login}
                              style={styles.login}>
                              {this.state.fontLoaded ? (
                                   <Text style={styles.button}>S'identifier</Text>
                              ) : (
                                        <ActivityIndicator size="large" />
                                   )}
                         </TouchableOpacity>

                         <TouchableOpacity style={styles.forget} onPress={() => this.props.navigation.navigate('Choise')}>
                              {this.state.fontLoaded ? (
                                   <Text style={styles.forget}>Tu n'as pas encore de compte ? Inscris-toi ! </Text>
                              ) : (
                                        <ActivityIndicator size="large" />
                                   )}
                         </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}></View>
               </View>


          );
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,

     },
     input: {
          fontFamily: 'CenturyGothic',
          borderRadius: 10,
          color: 'white',
          textAlign: 'center',
          height: 50,
          padding: 10,
          marginBottom: 20,
          marginTop: 20,
          marginLeft: 100,
          marginRight: 100,
          backgroundColor: 'rgba(255,255,255,0.2)',
          paddingHorizontal: 10

     },
     login: {

          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 10,
          marginLeft: 80,
          marginRight: 80
     },

     textTerm: {
          textAlign: 'center',
          color: 'white',
     },

     button: {
          height: 55,
          textAlign: 'center',
          color: 'white',
          padding: 15,
     },

     img: {
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',

     },
     logo: {
          width: 250,
          height: 250,
          marginLeft: 30,
          marginTop: 20,
     },
     forget: {
          fontFamily: 'CenturyGothic',
          fontFamily: 'CenturyGothic',
          marginTop: 10,
          textAlign: 'center',
          color: 'white',

     },
});

export default Login