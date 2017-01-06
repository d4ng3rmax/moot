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

const App = React.createClass({
    render() {
        return (
            <Navigator
            initialRoute = {{
                name: 'Previsão do dia',
                index: 0,
                component: Search,
                passProps: {}
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
        )
    }
})


let NavigationBarRouteMapper = {
    LeftButton( route, navigator, index, navState ) {
        if (index == 0) return null
        var previousRoute = navState.routeStack[ index - 1 ]

        return (
            <TouchableOpacity
                onPress={() => {
                    //this.setState({ show: true });
                    navigator.pop()
                    console.info( React.search );
                }}
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
            <Text style={[ my_css.navBarText, my_css.navBarTitleText ]}>
                { route.name }
            </Text>
        )
    }
}

AppRegistry.registerComponent( 'moot', () => App )
