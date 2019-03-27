// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native'




// // creer une class qui herite  // component -> element graphique 
class Dashboard extends React.Component {
    //   // methode obligatoire
    render() {
        // recuepere dans le component parent.js au niveau du render item
       

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 300,}}>
           
            </View>
        );
    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({
img: {
    width: 100,
    height: 100
}
})

// exporter le component

export default Dashboard

