// // creer un compenent 
import React from 'react'
import { LinearGradient } from 'expo'
import Header from './Header'
import { Font } from 'expo'

// // importer les composents react native

import { StyleSheet, View, Button, TextInput, FlatList, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Blocknote from '../Components/Blocknote'

// // creer une class qui herite  // component -> element graphique 
class Note extends React.Component {
    //   // methode obligatoire

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            note: '',
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'CenturyGothic': require('../fonts/CenturyGothic.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    sendNote = () => {
        //   alert('ok');
        const { note } = this.state;



        fetch('https://bellybump.fr/api/note.php', {
            method: 'POST',
            header: {
                'Accept': 'application/Json',
                'Content-type': 'application/Json'
            },
            body: JSON.stringify({
                note: note,

            })
        })

            .then((response) => response.json())

            .then((responseJson) => {
                if (responseJson.success === true) {
                    alert("ok")
                } else {
                    alert("pas ok")
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        let notes = this.state.noteArray.map((val, Key) => {
            return <Blocknote key={Key} Keyval={Key} val={val}
                deleteMethod={() => this.deleteNote(Key)} />
        })
        return (

            <View style={styles.container}>

                <Header />

                <TouchableOpacity style={styles.imgg} onPress={() => this.props.navigation.openDrawer()}>
                    <Image style={styles.imggg} source={require('../img/profile.png')} />
                </TouchableOpacity>
                
                <Text style={styles.title}>Bloc-notes</Text>
                <Text style={styles.littletitle}>Pour ne rien oublier</Text>

                <View style={styles.scrollContainer}>

                    <View style={styles.fond}>
                        {/* onPress={this.sendNote} */}
                        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                        <Image style={styles.img} source={require('../img/valid.png')} />
                        </TouchableOpacity>
                        {this.state.fontLoaded ? (
                            <TextInput style={styles.TextInput} onChangeText={(note) => this.setState({ note })}
                                value={this.state.note}
                                placeholder='Ajouter une note ...'  placeholderTextColor='black'>
                                
                            </TextInput>
                        ) : (
                                <ActivityIndicator size="large" />
                            )}
                        <ScrollView>
                            {notes}
                        </ScrollView>
                    </View>
                </View>



            </View>

        );
    }
    addNote() {

        if (this.state.note) {

            var d = new Date();
            this.state.noteArray.push({
                'date': d.getFullYear() +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getDate(),
                'note': this.state.note
            });
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ note: '' });

        }

    }

    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })

    }
}
// style a part + externalisation avec styleshett (API)
const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    scrollContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f3fc',
    },
    fond: {
        backgroundColor: 'white',
        width: '90%',
        height: '90%',
        borderRadius: 20,
        elevation: 10,
        shadowOpacity: .2,
    },

    block: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },

    TextInput: {
        fontFamily: 'CenturyGothic',
        fontSize: 18,
        color: 'black',
        borderRadius: 50,
        height: 50,
        marginLeft: 35,
        marginRight: 70,
        marginTop: 40,
    },
    addButton: {
        zIndex: 2,
        right: 25,
        top: 35,
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    addButtonText: {
        color: '#fff',
        fontSize: 40,
    },
    img: {
        position: 'absolute',
        width: '90%',
        height: '90%',
        marginTop: 20,
        alignSelf: 'center',
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
    title: {
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
})

// // exporter le component

export default Note




