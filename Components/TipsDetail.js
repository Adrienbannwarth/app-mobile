// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'
import { getTipsDetailFromApi } from './Tips/Parent'
import { Font } from 'expo'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'


// // creer une class qui herite  // component -> element graphique 
class TipsDetail extends React.Component {
    //   // methode obligatoire

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            tips: undefined,
            isLoading: true,

        }

    }


    async componentDidMount() {
        getTipsDetailFromApi(this.props.navigation.state.params.idTips).then(data => {
            this.setState({
                tips: data,
                isLoading: false
            })
        })
        await Font.loadAsync({
            'CenturyGothic': require('../fonts/CenturyGothic.ttf')
        });
        this.setState({ fontLoaded: true });
    }


    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }



    _displayTips() {

        const tips = this.state.tips
        if (tips != undefined) {

            return (
                <View style={styles.container}>

                    <View style={styles.contain_img}>
                        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Tips')}>
                            <Image
                                style={styles.back}
                                source={require('../img/cross.png')}
                            />
                        </TouchableOpacity>

                        <Image
                            style={styles.img_background}
                            source={{ uri: tips.resultats.article[0].image }}
                        />


                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={styles.container_text}>
                        {this.state.fontLoaded ? (
                            <Text style={styles.contenu}>{tips.resultats.article[0].contenu}</Text>
                        ) : (
                                <ActivityIndicator size="large" />
                            )}

                    </ScrollView>
                </View>


            )
        }
    }



    render() {

        const idTips = this.props.navigation.state.params.idTips
        const tips = this.state.tips;
        if (!tips) return <View></View>;

        return (

            <View style={styles.container}>

                <Image
                    style={styles.img}
                    source={require('../img/background_article.png')}
                />
                {this.state.fontLoaded ? (
                    <Text style={styles.title}>{tips.resultats.article[0].intitule_article}</Text>
                ) : (
                        <ActivityIndicator size="large" />
                    )}
                {this._displayTips()}
                {this._displayLoading()}
                {/* <Text>detail du tips{idTips}</Text> */}

            </View>

        );
    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

    img: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    back: {
        width: 70,
        height: 70,
        position: 'absolute',
        top: 0,
        zIndex: 5,
    },
    container_text: {
        elevation: 10,
        shadowOpacity: .1,
        width: '85%',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 10,
    },
    contain_img: {
        width: '85%',
        marginTop: 100,
        flex: 1,
    },
    img_background: {
        height: 300,
        width: 350,
    },
    title: {
        fontFamily: 'CenturyGothic',
        elevation: 10,
        shadowOpacity: .2,
        backgroundColor: 'white',
        position: 'absolute',
        padding: 20,
        top: '43%',
        fontSize: 15,
        borderRadius: 15,
        zIndex: 3,
    },
    contenu: {
        fontFamily: 'CenturyGothic',
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        color: 'grey',
        textAlign: 'center',
        textAlign: 'justify'
    },



})

// exporter le component

export default TipsDetail

