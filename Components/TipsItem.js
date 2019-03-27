// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'
import { Font } from 'expo'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import { red } from 'ansi-colors';



// // creer une class qui herite  // component -> element graphique 
class TipsDetail extends React.Component {

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

    //   // methode obligatoire
    render() {
        // recuepere dans le component parent.js au niveau du render item
        const tips = this.props.tips
        const displayDetailForTips = this.props.displayDetailForTips

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 260, }}>
                <TouchableOpacity onPress={() => displayDetailForTips(tips.id)} style={styles.block}>
                    <Image source={{ uri: tips.image }} style={styles.img} />
                    <View style={styles.title}>
                    {this.state.fontLoaded ? (
                        <Text style={styles.titlee}>{tips.intitule_article}</Text>
                    ) : (
                            <ActivityIndicator size="large" />
                        )}
                        </View>

                </TouchableOpacity>
            </View>
        );
    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({


    img: {
        width: 230,
        height: 160,
    },

    block: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        elevation: 10,
        shadowOpacity: .2,

    },
    title: {
        backgroundColor: 'white',
        position: 'absolute',
        top: '85%',
        height: 40,
        width: 150,
        borderRadius: 12,
    },
    titlee: {
        textAlign: 'center',
        padding: 5,
        fontSize: 10,
        fontFamily: 'CenturyGothic',
    }
})

// exporter le component

export default TipsDetail

