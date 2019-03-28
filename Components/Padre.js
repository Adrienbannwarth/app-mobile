// // creer un compenent 
import React from 'react'
import { Font } from 'expo'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native'

// // creer une class qui herite  // component -> element graphique 
class Padre extends React.Component {
    // methode obligatoire  

    constructor(props) {
        super(props)
        this.state = {
            prenom: '',
            email: '',
            password: '',
            id: '',
            isVisible: false,
            fontLoaded: false
        }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'CenturyGothic': require('../fonts/CenturyGothic.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    userRegister = () => {
        alert('ok');
        const { prenom } = this.state;
        const { email } = this.state;
        const { password } = this.state;
        const { id } = this.state;

        fetch('https://bellybump.fr/api/api_connexion.php', {
            method: 'POST',
            header: {
                'Accept': 'application/Json',
                'Content-type': 'application/Json'
            },
            body: JSON.stringify({
                prenom: prenom,
                email: email,
                password: password,
                id: id,
            })
        })

            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.success === true) {

                }
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (

            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Image
                    style={styles.img}
                    source={require('../img/login.jpg')}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Image
                        style={styles.logo}
                        source={require('../img/logo.png')}
                    />

                </View>
                <View style={{ flex: 3, justifyContent: 'space-around', flexDirection: 'column', }}>
                    {this.state.fontLoaded ? (
                        <TextInput
                            placeholder="Prénom"
                            placeholderTextColor="white"
                            TextInput="rgba(255,255,255,0.5"
                            style={styles.input}
                            onChangeText={prenom => this.setState({ prenom })}
                        />
                    ) : (
                            <ActivityIndicator size="large" />
                        )}
                    {this.state.fontLoaded ? (
                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor="white"
                            TextInput="rgba(255,255,255,0.5"
                            style={styles.input}
                            onChangeText={email => this.setState({ email })}
                        />
                    ) : (
                            <ActivityIndicator size="large" />
                        )}

                    {this.state.fontLoaded ? (
                        <TextInput
                            placeholder="Mot de passe"
                            secureTextEntry={true}
                            placeholderTextColor="white"
                            TextInput="rgba(255,255,255,0.5"
                            style={styles.input}
                            onChangeText={password => this.setState({ password })}
                        />
                    ) : (
                            <ActivityIndicator size="large" />
                        )}
                    {this.state.fontLoaded ? (
                        <TextInput
                            placeholder="ID"
                            placeholderTextColor="white"
                            TextInput="rgba(255,255,255,0.5"
                            style={styles.input}
                            onChangeText={id => this.setState({ id })}
                        />
                    ) : (
                            <ActivityIndicator size="large" />
                        )}


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')} style={styles.login}>
                        {/* onPress={this.userRegister} */}
                        {this.state.fontLoaded ? (
                            <Text style={styles.button}>S'inscrire</Text>
                        ) : (
                                <ActivityIndicator size="large" />
                            )}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forget} onPress={() => this.props.navigation.navigate('Login')}>
                        {this.state.fontLoaded ? (
                            <Text style={styles.forget}>Tu as déja un compte ? Connecte-toi ! </Text>
                        ) : (
                                <ActivityIndicator size="large" />
                            )}
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Choise')} >
                            <Image style={styles.img} source={require('../img/back.png')} />
                        </TouchableOpacity>
                    </View>

                </View >
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    back: {
        width: 60,
        height: 60,
        opacity: .6,

    },

    input: {
        fontFamily: 'CenturyGothic',
        borderRadius: 10,
        color: 'white',
        textAlign: 'center',
        height: 50,
        padding: 10,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10

    },
    login: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        marginLeft: 80,
        marginRight: 80
    },

    textTerm: {
        textAlign: 'center',
        color: 'white',
    },

    button: {
        fontFamily: 'CenturyGothic',
        height: 55,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        padding: 15,
    },

    img: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    logo: {
        width: 250,
        height: 250,
        marginLeft: 30,
        marginTop: 20,
    },
    forget: {
        fontFamily: 'CenturyGothic',
        marginTop: 10,
        textAlign: 'center',
        color: 'white',

    },
});

// // exporter le component

export default Padre

