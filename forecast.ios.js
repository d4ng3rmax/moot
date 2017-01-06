/**
 * Teste Moot
 * @owner: Gabriel Silveira
 * Previsão do Tempo / Forecast
 */

'use strict'

import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    ListView,
    ScrollView
} from 'react-native';

const my_css = require( './assets/stylesheets/styles' );

const ForecastRow = ( forecast ) => {

    let _date, _temp;
    _date = forecast.dt_txt
        .split( " " )[ 0 ]
        .split( "-" );
    _date = _date[ 2 ] + "/" + _date[ 1 ] + "/" + _date[ 0 ];
    _temp = forecast.main.temp.toFixed( 0 ) + 'ºC'; 

    return (
        <View style = { my_css.row }>
            <View style = { my_css.rightContainer }>
                <Text style = { { fontWeight: 'bold' } }>{ _date } - </Text>
                <Text style = { my_css.subtitle }>
                    { forecast.weather[0].description }, { _temp }
                </Text>
            </View>
        </View>
    )
}

module.exports = React.createClass({
    render: function() {
        return (
            <ScrollView style = { my_css.scroll }>
                <Text style = { my_css.text}>{ this.props.forecastRaw.city.name }</Text>
                <ListView dataSource = { this.props.forecastData } renderRow = { ForecastRow } style = { my_css.listView }/>
            </ScrollView>
        )
    }
})

