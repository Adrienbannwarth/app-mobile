import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
import Icon from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo'

import React from 'react';
import {
     StyleSheet,
     Image,
     Text,
     View
} from 'react-native';
import {
     createStackNavigator,
     createMaterialTopTabNavigator,
     createSwitchNavigator,
     createDrawerNavigator
} from 'react-navigation';

//
import Madre from './Components/Madre';
import Padre from './Components/Padre';
import Note from './Components/Note';
import Calendar from './Components/Calendar';
import Login from './Components/Login';
import Tips from './Components/Tips';
import Choise from './Components/Choise'
import Menu from './Components/Menu'
import First from './Components/First'
import TipsDetail from './Components/TipsDetail'
import Dashboard from './Components/Dashboard'

//
import Parent from './Components/Tips/Parent';
import Work from './Components/Tips/Work';
import Name from './Components/Tips/Name';
import Birth from './Components/Tips/Birth';
import Hobby from './Components/Tips/Hobby';
import Confort from './Components/Tips/Confort';
import HeaderTips from './Components/Tips/HeaderTips'





//////////////////////////////// STACK NAVIGATOR //////////////////////////////////////

const TipsStackNavigator = createStackNavigator({


     Tips: {
          screen: Tips,
          navigationOptions: {
               header: null
          },

     },
     Padre: {
          screen: Padre,
          navigationOptions: {
               header: null
          }
     },
     Madre: {
          screen: Madre,
          navigationOptions: {
               header: null
          }
     },

     Login: {
          screen: Login,
          navigationOptions: {
               header: null
          }
     },

     Work: {
          screen: Work,
          navigationOptions: {
               header: null
          }
     },
     TipsDetail: {
          screen: TipsDetail,
          navigationOptions: {
               header: null
          }
     },
     HeaderTips: {
          screen: HeaderTips,
     },

     Parent: {
          screen: Parent,
          navigationOptions: {
               header: null
          }
     },

     Hobby: {
          screen: Hobby,
          navigationOptions: {
               header: null
          }
     },

     Confort: {
          screen: Confort,
          navigationOptions: {
               header: null
          }
     },
     Birth: {
          screen: Birth,
          navigationOptions: {
               header: null
          }
     },
     Name: {
          screen: Name,
          navigationOptions: {
               header: null
          }
     },

})



//////////////////////////////// TAB NAVIGATOR //////////////////////////////////////

const MainScreenNavigator = createMaterialTopTabNavigator({


     Tab1: {
          screen: Menu,
          navigationOptions: {
               tabBarIcon: () => {
                    return <Image source={require('./img/home.png')}
                         style={styles.icon} />
               }
          },
     },

     Tab2: {
          screen: TipsStackNavigator,
          navigationOptions: {
               tabBarIcon: () => {
                    return <Image source={require('./img/book.png')}
                         style={styles.icon} />
               }
          },
     },

     Tab3: {
          screen: Note,
          navigationOptions: {
               tabBarIcon: () => {
                    return <Image source={require('./img/writing.png')}
                         style={styles.icon} />
               }
          },
     },
     Tab4: {
          screen: Calendar,
          navigationOptions: {
               tabBarIcon: () => {
                    return <Image source={require('./img/calendar.png')}
                         style={styles.icon} />
               }
          },
     },

},

     {
          tabBarOptions: {
               showLabel: false,
               showIcon: true,
               style: {
                    backgroundColor: 'white',
               },
               indicatorStyle: {
                    height: 0,
               },

          },


          tabBarPosition: 'bottom',
     })

const CustomDrawerComponent = (props) => (
     <View style={styles.container}>
          <Image style={styles.img} source={require('./img/nvxlogo.jpg')} />
  
               <Text style={styles.button}>Mes informations personnelles</Text>

         
               <Text style={styles.button}>Mon conjoint</Text>

               <Text style={styles.button}>Modifier la date du terme</Text>
 
               <Text style={styles.button}>Mes informations personnelles</Text>

       

     </View>
)

//////////////////////////////// DRAWER  NAVIGATOR //////////////////////////////////////
const DrawerNavigator = createDrawerNavigator({
     Dashboard: MainScreenNavigator,

},
     {
          contentComponent: CustomDrawerComponent
     });


//////////////////////////////// SWICTH NAVIGATOR //////////////////////////////////////

const AppSwitchNavigator = createSwitchNavigator({
     // First: {screen: First},
     // Choise: { screen: Choise },
     // Padre: { screen: Padre },
     // Madre: { screen: Madre },
     // Login: { screen: Login },
     Dashboard: { screen: DrawerNavigator }
});

const styles = StyleSheet.create({
     icon: {
          width: 30,
          height: 30
     },
     container: {
          flex: 1,
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#f2f3fc'
     },
     img: {
          marginTop: 50,
          width: 180,
          height: 180
     },

     child: {
          flex: 1,
          justifyContent: 'center',
          height: 70,
          width: 180,
          padding: 10,
          marginBottom: 40,
          marginTop: 40,
          marginLeft: 100,
          marginRight: 100,
          borderRadius: 10,
          paddingHorizontal: 10,
          backgroundColor: '#96a1fc',
     },

     button: {
          fontSize: 18,
          borderBottomWidth: 1,
          marginTop: 20,
          borderBottomColor: 'grey',
          color: 'black',
          textAlign: 'center',
     }

});




export default AppSwitchNavigator;



