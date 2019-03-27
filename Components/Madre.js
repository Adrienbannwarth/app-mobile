// // creer un compenent 
import React from 'react'
import moment from 'moment'


// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'


// // creer une class qui herite  // component -> element graphique 
class Madre extends React.Component {
    // methode obligatoire  

    constructor(props) {
        super(props)
        this.state = {
            prenom: '',
            date: '',
            email: '',
            password: '',

            isVisible: false
        }
    }

    userRegister = () => {
        //   alert('ok');
        const { prenom } = this.state;
        const { date } = this.state;
        const { email } = this.state;
        const { password } = this.state;


        fetch('https://bellybump.fr/api/register_true.php', {
            method: 'POST',
            header: {
                'Accept': 'application/Json',
                'Content-type': 'application/Json'
            },
            body: JSON.stringify({
                prenom: prenom,
                date: date,
                email: email,
                password: password,

            })
        })

            .then((response) => response.json())

            .then((responseJson) => {
                if (responseJson.success === true) {
                    this.props.navigation.navigate(("Login"))
                } else {
                    alert(responseJson.message)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }


    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            date: moment(datetime).format('YYYY MM DD')
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false,
        })
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


                <View style={{flex: 3, justifyContent: 'space-around', flexDirection: 'column', }}>

                    <TextInput
                        placeholder="Prénom"
                        returnKeyType='next'
                        placeholderTextColor="white"
                        TextInput="rgba(255,255,255,0.5"
                        style={styles.input}
                        onChangeText={prenom => this.setState({ prenom })}
                    />
                    <TextInput
                        placeholder="E-mail"
                        keyboardType='email-address'
                        placeholderTextColor="white"
                        returnKeyType='next'
                        TextInput="rgba(255,255,255,0.5"
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                    />

                    <TouchableOpacity style={styles.input} onPress={this.showPicker}>
                        <Text style={styles.textTerm}>Date du terme</Text>
                    </TouchableOpacity>



                    <DateTimePicker
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'date'}
                        onPress={date => this.setState({ date })}
                    />

                    <Text style={styles.TextDate}>{this.state.date}</Text>


                    <TextInput
                        returnKeyType='next'
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        placeholderTextColor="white"
                        TextInput="rgba(255,255,255,0.5"
                        style={styles.input}
                        onChangeText={password => this.setState({ password })}
                    />


                    {/* <TextInput
                    placeholder="Confirmer le mot de passe"
                    placeholderTextColor="white"
                    TextInput="rgba(255,255,255,0.5"
                    style={styles.input}
                    /> */}

                    <TouchableOpacity onPress={this.userRegister} style={styles.login}>
                        <Text style={styles.button}>S'inscrire </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forget} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.forget}>tu as déja un compte? Connecte toi ! </Text>
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Choise')} >
                            <Image style={styles.img} source={require('../img/back.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
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
        opacity: .7,

    },
    input: {
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
        marginTop: 4
    },

    button: {
        height: 55,
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
    },
    forget: {
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
    },

    TextDate: {
        textAlign: 'center',
        color: 'white',
    }
});

// // exporter le component

export default Madre
