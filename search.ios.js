/**
 * Teste Moot
 * @owner: Gabriel Silveira
 * Previsão do Tempo / Search
 */

'use strict'

import React, { Component } from 'react';
import {
    Text,
    Image,
    TextInput,
    View,
    Switch,
    TouchableHighlight,
    ListView,
    Alert
} from 'react-native';

const Forecast = require( './forecast.ios' )
const openWeatherAppId = '0b1b415c82932a9896af3bb1a447836e'
const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast'
const my_css = require( './assets/stylesheets/styles' )

module.exports = React.createClass({
    getInitialState() {
        return ({ cityName: '', show: false })
    },
    handleCityName(cityName) {
        this.setState({ cityName: cityName, show: false })
    },
    search( event ) {
        let cityName = this.state.cityName

        if (!cityName) return Alert.alert('Campo de busca vazio',
            'Por favor insira uma cidade no campo de busca',
            [{ text: 'OK', onPress: () => console.log( 'OK Pressionado!' ) }]
        )
        fetch( `${ openWeatherUrl }/?appid=${ openWeatherAppId }&q=${ cityName }&units=metric`, {
        //fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London&appid=0b1b415c82932a9896af3bb1a447836e&units=metric`, {
            method: 'GET'
        })
        .then(( response ) => response.json())
        .then(( responseJson ) => {

            let dataSource = new ListView.DataSource({
                rowHasChanged: ( row1, row2 ) => row1 !== row2
            })
            if ( this.state.show == false ) {
                this.props.navigator.push({
                    name: 'Forecast',
                    component: Forecast,
                    passProps: {
                        forecastData: dataSource.cloneWithRows( responseJson.list ),
                        forecastRaw: responseJson
                    }
                })
                this.setState({ show: true });
            }
        })
        .catch((error) => {
            console.warn(error)
        })
    },
    render() {
        return (
            <Image source = { require('./assets/images/background.jpg') } style = { my_css.backgroundImage }>
                <View style = { my_css.container }>
                    <Text style = { my_css.welcome }>
                        PREVISÃO DO TEMPO (5 DIAS)
                    </Text>

                    <Text style ={my_css.instructions}>
                        Insira o nome da cidade:
                    </Text>

                    <TextInput
                        placeholder = "ex. São Paulo"
                        value = { this.state.cityName }
                        returnKeyType = "search"
                        enablesReturnKeyAutomatically = { true }
                        onChangeText = { this.handleCityName }
                        onEndEditing = { this.search } style = { my_css.textInput }/>

                    <TouchableHighlight onPress = { this.search } style = { my_css.touch }>
                        <Text style={ my_css.button }>Buscar</Text>
                    </TouchableHighlight>
                </View>
            </Image>
        )
    }
})

