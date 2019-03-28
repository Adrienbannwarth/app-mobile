// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'
import { Font } from 'expo'


// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity,ActivityIndicator } from 'react-native'


// // creer une class qui herite  // component -> element graphique 
class Choise extends React.Component {
     //   // methode obligatoire

     constructor(props) {
          super(props)
          this.state = {
               fontLoaded: false
          }
     }

     async componentWillMount() {
          await Font.loadAsync({
               'CenturyGothic': require('../fonts/CenturyGothic.ttf')
          });
          this.setState({ fontLoaded: true });
     }

     render() {
          return (

               <View style={styles.container}>


                    <Image
                         style={styles.img}
                         source={require('../img/login.jpg')}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
                         <Image
                              style={styles.logo}
                              source={require('../img/logo.png')}
                         />
                    </View>

                    <View style={{ flex: 3, justifyContent: 'space-around', flexDirection: 'column', }}>
                         <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Padre')}>
                              {this.state.fontLoaded ? (
                                   <Text style={styles.title}>Père</Text>
                              ) : (
                                        <ActivityIndicator size="large" />
                                   )}
                         </TouchableOpacity>

                         <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Madre')}>
                              {this.state.fontLoaded ? (
                                   <Text style={styles.title}>Mère</Text>
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
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
     },

     child_container: {
          justifyContent: "space-around",
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 30,
          width: 150,
          height: 150,
     },

     title: {
          fontFamily: 'CenturyGothic',
          color: 'white',
          textAlign: 'center',
          fontSize: 20,
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
          marginLeft: 30
     },

})

// exporter le component

export default Choise

