// // creer un compenent 
import React from 'react'
import Header from './Header'
import { Font } from 'expo'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, TouchableOpacity, Picker, ScrollView, ActivityIndicator } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import SwitchToggle from 'react-native-switch-toggle';
import Blocknote from '../Components/Blocknote'
import Date from './Date'


class Calendar extends React.Component {
    //   // methode obligatoire

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false
            // date: '',
            // isVisible: false,
            // switchOn1: false,
            // noteArray: [],
            // noteText: '',
            // pickerSelection: 'Aucun rendez-vous séléctionné',

        }
    }

    // onPress1 = () => {
    //     this.setState({ switchOn1: !this.state.switchOn1 });
    // }


    // addNote() {

    //     this.state.noteArray.push({
    //         'note': this.state.noteText,
    //         'pickerSelection': this.state.pickerSelection,
    //         'date': this.state.date
    //     });

    //     this.setState({ noteArray: this.state.noteArray })
    //     this.setState({ noteText: '' });
    //     this.setState({ pickerSelection: '' });
    // }



    // deleteNote(key) {
    //     this.state.noteArray.splice(key, 1);
    //     this.setState({ noteArray: this.state.noteArray })

    // }

    // handlePicker = (datetime) => {
    //     this.setState({
    //         isVisible: false,
    //         date: moment(datetime).format('DD MM YYYY / HH:mm')
    //     })
    // }

    // showPicker = () => {
    //     this.setState({
    //         isVisible: true
    //     })
    // }

    // hidePicker = () => {
    //     this.setState({
    //         isVisible: false,
    //     })
    // }

    async componentWillMount() {
        await Font.loadAsync({
            'CenturyGothic': require('../fonts/CenturyGothic.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        // let dates = this.state.noteArray.map((val, Key) => {
        //     return <Date key={Key} Keyval={Key} val={val}
        //         deleteMethod={() => this.deleteNote(Key)} />
        // })
        return (

            <View style={styles.container}>

                <Header />

                <Text style={styles.titlee}>Calendrier</Text>
                <Text style={styles.littletitle}>Être bien organisé</Text>


                <View style={{ flex: 4, flexDirection: 'row', backgroundColor: '#f2f3fc', flexWrap: "wrap", justifyContent: "center", alignItems: 'center' }}>

                    {this.state.fontLoaded ? (
                        <Text style={{ fontSize: 20,  fontFamily: 'CenturyGothic'}}>Prochainement ...</Text>
                    ) : (
                            <ActivityIndicator size="large" />
                        )}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fond: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    selection: {
        zIndex: 2,
        elevation: 20,
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

    TextInput: {
        color: 'black',
        borderRadius: 50,
        height: 50,
        marginLeft: 35,
        marginRight: 70,
        marginTop: 40,
    },
    addButton: {
        zIndex: 2,
        top: 100,
        backgroundColor: '#96a1fc50',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    circle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 700,
        height: 700,
        top: - 500,
        backgroundColor: 'white',
        borderRadius: 1000,
        elevation: 20,
        shadowOpacity: .2,
    },
    textDate: {
        fontSize: 16,
    },
    list: {
        top: 100,
        textAlign: 'center',
    }
});


export default Calendar