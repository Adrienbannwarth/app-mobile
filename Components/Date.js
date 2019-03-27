// // creer un compenent 
import React from 'react'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import SwitchToggle from 'react-native-switch-toggle';

// // creer une class qui herite  // component -> element graphique 
class Date extends React.Component {
      //   // methode obligatoire

      constructor(props) {
            super(props)
            this.state = {
                  switchOn1: false,
            }
      }

      onPress1 = () => {
            this.setState({ switchOn1: !this.state.switchOn1 });
      }

      render() {
            return (

                  <View Key={this.props.Keyval} style={styles.note}>
                        <View>
                              <SwitchToggle
                                    switchOn={this.state.switchOn1}
                                    onPress={this.onPress1}
                              />
                        </View>
                        <View>
                              {/* <Text style={styles.noteText}>{this.props.val.note}</Text> */}
                              <Text style={styles.noteText}>{this.props.val.pickerSelection}</Text>
                              <Text style={styles.noteText}>{this.props.val.date}</Text>
                        </View>

                        <View>
                              <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                                    <Image style={styles.noteDeleteText} source={require('../img/err.png')}></Image>
                              </TouchableOpacity>
                        </View>


                  </View>


            );
      }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({
      note: {
            flex: 1,
            flexDirection: 'row',
            top: 50,
            height: 150,
            position: 'relative',
            zIndex: 20,
            backgroundColor: 'white',
            borderRadius: 20,
      },
      noteText: {

      },
      noteDeleteText: {
            width: 40,
            height: 40,
      }
})
// // exporter le component

export default Date




