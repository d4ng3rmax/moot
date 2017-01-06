/**
 * Teste Moot
 * @owner: Gabriel Silveira
 * Previsão do Tempo
 */

'use strict'

import React, { Component } from 'react';
import { 
    AppRegistry,
    StatusBar,
    Navigator,
    View,
    Text,
    Image,
    ListView,
    TextInput,
    AlertIOS,
    AsyncStorage,
    TouchableOpacity,
    TouchableHighlight,
    NavigatorIOS
} from 'react-native';

const Search = require( './search.ios' );
const my_css = require( './assets/stylesheets/styles' );

const storage = {
    getFromStorage( name, callback ) {
        AsyncStorage.getItem( name ).then(( value ) => {
            console.log( 'AsyncStorage GET for ${ name }: "${ value }"' );

            if ( value ) callback( value )
                else callback( null )
            }).done()
    },
    setInStorage( name, value ) {
        console.log( 'AsyncStorage SET for ${ name }: "${ value }"' );

        AsyncStorage.setItem( name, value )
    },
    removeItem: AsyncStorage.removeItem
}

class App extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <Navigator
            initialRoute = {{
                name: 'Previsão do dia',
                index: 0,
                component: Search,
                passProps: {
                    storage: storage
                }
            }}
            ref = 'navigator'
            navigationBar = {
                <Navigator.NavigationBar
                    routeMapper = { NavigationBarRouteMapper }
                    style = { my_css.navBar }
                />
            }
            renderScene = {( route, navigator ) => {
                let props = route.passProps
                    props.navigator = navigator
                    props.name = route.name
                    props.app = this
                return React.createElement( route.component, props )
            }}
            />
        );
    }
}

let NavigationBarRouteMapper = {
    LeftButton( route, navigator, index, navState ) {
        if ( index == 0 ) return null
            var previousRoute = navState.routeStack[ index - 1 ]

        return (
            <TouchableOpacity
                onPress = { () => navigator.pop() }
                style = { my_css.navBarLeftButton }>
                <Text style = {[ my_css.navBarText, my_css.navBarButtonText ]}>
                {'<'} { previousRoute.name }
                </Text>
            </TouchableOpacity>
        )
    },
    RightButton( route, navigator, index, navState ) {
        return (
            <View/>
        )
    },
    Title( route, navigator, index, navState ) {
        return (
            <Text style={[my_css.navBarText, my_css.navBarTitleText]}>
                {route.name}
            </Text>
        )
    }
}

AppRegistry.registerComponent('moot', () => App)
