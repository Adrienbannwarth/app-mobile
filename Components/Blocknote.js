// // creer un compenent 
import React from 'react'
import { Font } from 'expo'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

// // creer une class qui herite  // component -> element graphique 
class Blocknote extends React.Component {
    //   // methode obligatoire

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'CenturyGothic': require('../fonts/CenturyGothic.ttf')
        });
        this.setState({ fontLoaded: true });
    }
    render() {
        return (

            <View Key={this.props.Keyval} style={styles.note}>
                {this.state.fontLoaded ? (
                    <Text style={styles.noteText}>{this.props.val.date}</Text>
                ) : (
                        <ActivityIndicator size="large" />
                    )}
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Image style={styles.noteDeleteText} source={require('../img/err.png')}></Image>
                </TouchableOpacity>

            </View>

        );
    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({
    note: {
        position: 'relative',
        paddingLeft: 30,
        marginBottom: 20,
        marginTop: 5,
    },
    noteText: {
        fontFamily: 'CenturyGothic',
        paddingLeft: 30,
        borderLeftWidth: 6,
        width: '80%',
        borderLeftColor: '#6fa9fe',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        bottom: 10,
        right: 20,
        top: 10,
    },
    noteDeleteText: {
        width: 40,
        height: 40,
    }
})
// // exporter le component

export default Blocknote




