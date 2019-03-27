// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'
import Header from './Header'
import { Font } from 'expo'


// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'


// // creer une class qui herite  // component -> element graphique 
class Tips extends React.Component {
    //   // methode obligatoire

    constructor(props) {
        super(props);
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

            <View style={{ flex: 1 }}>

                <Header />
                <TouchableOpacity style={styles.imgg} onPress={() => this.props.navigation.openDrawer()}>
                    <Image style={styles.imggg} source={require('../img/profile.png')} />
                </TouchableOpacity>

                <Text style={styles.titlee}>Articles</Text>
                <Text style={styles.littletitle}>Un peu de lecture ...</Text>
                <View style={{ flex: 4, backgroundColor: '#f2f3fc' }}>
                    <ScrollView>
                        <View style={{ flex: 4, flexDirection: 'row', backgroundColor: '#f2f3fc', flexWrap: "wrap", justifyContent: "space-around" }}>


                            <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Parent')} >
                                <Image style={styles.img} source={require('../img/devenir.png')} />
                                {this.state.fontLoaded ? (
                                <Text style={styles.title}>DEVENIR PARENT</Text>
                                ) : (
                                        <ActivityIndicator size="large" />
                                   )}
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Confort')}>
                                <Image style={styles.img} source={require('../img/bien-etre.png')} />
                                <Text style={styles.title}>BIEN ETRE</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Work')}>
                                <Image style={styles.img} source={require('../img/work.png')} />
                                <Text style={styles.title}>GROSSESSE & TRAVAIL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Hobby')}>
                                <Image style={styles.img} source={require('../img/loisir.png')} />
                                <Text style={styles.title}>LOISIRS</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Name')}>
                                <Image style={styles.img} source={require('../img/name.png')} />
                                <Text style={styles.title}>PRENOMS</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.child_container} onPress={() => this.props.navigation.navigate('Birth')}>
                                <Image style={styles.img} source={require('../img/naissance.png')} />
                                <Text style={styles.title}>POST-NAISSANCE</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
            </View>


        );
    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({

    child_container: {
        elevation: 10,
        shadowOpacity: .2,
        borderRadius: 10,
        width: 150,
        height: 150,
        backgroundColor: 'white',
        marginBottom: 30,
        marginTop: 20,
    },

    TextInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
        paddingLeft: 5
    },

    img: {
        marginTop: 10,
        left: '26%',
        width: 70,
        height: 70,
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

    titlee: {
        position: 'absolute',
        color: 'white',
        fontSize: 34,
        marginTop: 60,
        marginLeft: 20,
        zIndex: 3,
    },

    littletitle: {
        position: 'absolute',
        color: 'white',
        fontSize: 17,
        marginTop: 110,
        marginLeft: 20,
        zIndex: 3,
    },
    title: {
        // fontFamily: 'CenturyGothic',
        textAlign: 'center',
        paddingTop: 20,
       
    },
})

// exporter le component

export default Tips

