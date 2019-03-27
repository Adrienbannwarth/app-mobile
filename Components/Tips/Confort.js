// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'
import Header from '../Header'
import Tips from '../Tips'
import TipsItem from '../TipsItem'
import { Font } from 'expo'

// // importer les composents react native

import { StyleSheet, View, TextInput, FlatList, Text, Image, TouchableOpacity, Button, ScrollView, ActivityIndicator } from 'react-native'
import HeaderTips from './HeaderTips';

export function getTipsDetailFromApi(id) {
    return fetch('https://bellybump.fr/api/api_article_id.php?id=' + id)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

class Confort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isLoading: true,
            dataSource: null,
            fontLoaded: false
        }
    }

    ShowHideComponent = () => {
        if (this.state.show == true) {
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    };


    componentDidMount() {

        Font.loadAsync({
            'CenturyGothic': require('../../fonts/CenturyGothic.ttf')
        });
        this.setState({ fontLoaded: true });

        return fetch('https://bellybump.fr/api/api_article.php?id_category=2')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.resultats.article,
                })
            })
            .catch((error) => {
                console.error(error);
            });


    }


    _displayDetailForTips = (idTips) => {
        this.props.navigation.navigate("TipsDetail", { idTips: idTips })
        console.log("display for Tips id" + idTips);
    }


    render() {
        if (this.state.isLoading) {

            return (
                <View style={styles.container}>
                </View>
            )
        } else {

            return (

                <View style={styles.container}>

                    <View style={{ zIndex: 10 }}>
                        <LinearGradient
                            colors={['#96a1fc', '#6fa9fe']}
                            style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '100%', height: 180 }}>
                        </LinearGradient>

                        <View style={styles.quote}>
                            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Tips')} >
                                <Image style={styles.back} source={require('../../img/back.png')} />
                            </TouchableOpacity>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                {this.state.fontLoaded ? (
                                    <Text style={styles.slogan}>L’apaisement réside dans chacun de nous.
                                         </Text>
                                ) : (
                                        <ActivityIndicator size="large" />
                                    )}
                            </View>


                        </View>
                    </View>

                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <TipsItem tips={item} displayDetailForTips={this._displayDetailForTips} />}
                    />

                    {/* 
                        {this.state.dataSource && this.state.dataSource.map((val, key) => {
                            return <TouchableOpacity style={styles.block} key={key} >
                                <Image source={{ uri: val.image }} style={styles.img} />
                                <Text style={styles.title}>{val.intitule_article}</Text>
                                {this.state.show ? (
                                    <View>
                                <Text style={styles.contenu}>{val.contenu}</Text>
                                </View>
                                ) : null}


                            </TouchableOpacity>
                        })} */}

                </View>

            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // flexWrap: "wrap",
        // justifyContent: "space-around"
    },
    back: {
        width: 60,
        height: 60,
        zIndex: 2,
        alignSelf: 'center',
    },
    quote: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        position: 'absolute',
        fontFamily: 'CenturyGothic',
        padding: 10,
        textAlign: 'center',
    },
});


export default Confort