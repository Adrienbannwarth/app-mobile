// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'


// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity, Icon } from 'react-native'


// // creer une class qui herite  // component -> element graphique 
class Header extends React.Component {
    //   // methode obligatoire
    render() {
        return (

            <LinearGradient
                //  colors={['#CFAAFF', '#A9EBFF']}
                colors={['#96a1fc', '#6fa9fe']}
                style={{ padding: 15, alignItems: 'center', borderRadius: 5, flex: 1, width: '100%', zIndex: 2, justifyContent: 'center' }}>
            </LinearGradient>

        );
    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
        position: 'absolute',
        right: 20,
    }

})

// exporter le component

export default Header

