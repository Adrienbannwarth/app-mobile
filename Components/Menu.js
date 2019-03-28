// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'
import Header from './Header'
import Madre from './Madre'
import { Font } from 'expo'


// // importer les composents react native

import { StyleSheet, View, Button, FlatList, Text, Image, TouchableOpacity, Animated, Easing, ActivityIndicator, Icon } from 'react-native'


// // creer une class qui herite  // component -> element graphique 
class Menu extends React.Component {


     constructor(props) {
          super(props);
          this.state = {
               timer: new Date(),
               fontLoaded: false
          }
     }

     async componentDidMount() {
          this.intervalID = setInterval(() => {
               this.setState({
                    timer: new Date()
               });
          }, 1000);
          await Font.loadAsync({
               'CenturyGothic': require('../fonts/CenturyGothic.ttf')
          });
          this.setState({ fontLoaded: true });
     }


     componentWillUnmount() {
          clearInterval(this.intervalID);
     }

     //   // methode obligatoire
     render() {
          var d = new Date();
          var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
          var jour = days[d.getDay()];

          var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
          var mois = months[d.getMonth()];
          var chiffre = d.getDate();
          // alert(jour + ' ' + chiffre + ' ' + mois);

          function dateDiff(date1, date2) {
               var diff = {}                           // Initialisation du retour
               var tmp = date2 - date1;

               tmp = Math.floor(tmp / 1000);             // Nombre de secondes entre les 2 dates
               diff.sec = tmp % 60;                    // Extraction du nombre de secondes

               tmp = Math.floor((tmp - diff.sec) / 60);    // Nombre de minutes (partie entière)
               diff.min = tmp % 60;                    // Extraction du nombre de minutes

               tmp = Math.floor((tmp - diff.min) / 60);    // Nombre d'heures (entières)
               diff.hour = tmp % 24;                   // Extraction du nombre d'heures

               tmp = Math.floor((tmp - diff.hour) / 24);   // Nombre de jours restants
               diff.day = tmp;

               return diff;
          }

          date1 = new Date('2019-07-19');
          date2 = new Date();
          diff = dateDiff(date1, date2);

          return (
               <View style={styles.container}>
                    <Text style={styles.titlee}>Belly Bump</Text>

                    <Header />

                    <TouchableOpacity style={styles.imgg} onPress={() => this.props.navigation.openDrawer()}>
                         <Image style={styles.imggg} source={require('../img/profile.png')} />
                    </TouchableOpacity>


                    <View style={{ flex: 4, backgroundColor: '#f2f3fc', zIndex: 3, alignItems: 'center', justifyContent: 'center' }}>
                         <View style={styles.blockHello}>
                              {this.state.fontLoaded ? (
                                   <Text style={styles.hello}>Bonjour Adrien</Text>

                              ) : (
                                        <ActivityIndicator size="large" />
                                   )}

                         </View>
                         <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }} >

                              <Image style={styles.img} source={require('../img/cercle.png')} />
                              {this.state.fontLoaded ? (
                                   <Text style={styles.day}> {diff.day} Jours</Text>
                              ) : (
                                        <ActivityIndicator size="large" />
                                   )}

                         </View>

                         <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                              {this.state.fontLoaded ? (
                                   <Text style={styles.today} >Aujourd'hui</Text>
                              ) : (
                                        <ActivityIndicator size="large" />
                                   )}
                              {this.state.fontLoaded ? (
                                   <Text style={styles.date}>{jour + ' ' + chiffre + ' ' + mois}</Text>
                              ) : (
                                        <ActivityIndicator size="large" />
                                   )}
                         </View>
                    </View>

               </View>
          );
     }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     img: {
          width: 300,
          height: 300,
     },
     imgg: {
          zIndex: 20,
          position: 'absolute',
          right: 20,
          top: 60
      },
      imggg: {
          width: 50,
          height: 50,
      },


     blockHello: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          height: 100,
          width: '80%',
          elevation: 10,
          shadowOpacity: .2,
          borderRadius: 15,
          top: -20,
     },

     hello: {
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'CenturyGothic',
          padding: 30,
     },

     day: {
          position: 'absolute',
          color: 'white',
          fontSize: 25,
          fontFamily: 'CenturyGothic',
     },

     today: {
          textAlign: 'center',
          fontSize: 35,
          fontFamily: 'CenturyGothic',
          marginBottom: 10
     },

     date: {
          textAlign: 'center',
          fontFamily: 'CenturyGothic',
          fontSize: 18,
     },
     titlee: {
          position: 'absolute',
          zIndex: 5,
          color: 'white',
          fontSize: 34,
          marginTop: 60,
          marginLeft: 20,
     },

     littletitle: {
          zIndex: 5,
          position: 'absolute',
          color: 'white',
          fontSize: 17,
          marginTop: 110,
          marginLeft: 20,
     },

})

// exporter le component

export default Menu

