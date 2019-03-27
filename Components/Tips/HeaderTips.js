// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'
// // importer les composents react native

import { StyleSheet, View, Button, FlatList, Text, Image, TouchableOpacity } from 'react-native'


// // creer une class qui herite  // component -> element graphique 
class HeaderTips extends React.Component {
    //   // methode obligatoire
    render() {
        return (
            <View>
                <LinearGradient
                    colors={['#96a1fc', '#6fa9fe']}
                    style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '100%', height: 180 }}>
                </LinearGradient>

                <View style={styles.quote}>
                    <Text style={styles.slogan}>La vie ne vaut rien mais rien ne vaut une vie.
                    </Text>
                    <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Tips')} >
                        <Image style={styles.back} source={require('../../img/back.png')} />
                    </TouchableOpacity>
             
                </View>
            </View>
        );
    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({
    back: {
        width: 80,
        height: 80,
        zIndex: 2,
        alignSelf: 'center',
    },
    quote: {
        top: 100,
        alignSelf: 'center',
        height: 140,
        borderRadius: 15,
        width: '80%',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 3
    },
    slogan: {
        padding: 10,
        textAlign: 'center',
    },

})

// exporter le component

export default HeaderTips

