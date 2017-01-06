import React, { Component } from 'react';
import { StyleSheet, PixelRatio } from 'react-native';

const my_css = StyleSheet.create({

    navBar: {
        backgroundColor: 'white',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD'
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10,
    },
    navBarTitleText: {
        color: '#333',
        fontWeight: '500',
        marginVertical: 9,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        color: 'darkblue'
    },

    /* search */

    navigatorContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textInput: {
        borderColor: '#8E8E93',
        borderWidth: 0.5,
        backgroundColor: '#fff',
        height: 40,
        marginLeft: 60,
        marginRight: 60,
        padding: 8,
    },
    button: {
        color: '#fff',
        backgroundColor: '#77ad3a',
        padding: 7,
        borderRadius: 3,
        fontWeight: '600',
    },
    touch: {
        marginBottom: 15,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#5c872c',
    },
    backgroundImage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 400,
        resizeMode: 'stretch'
    },

    /* forecast */

    listView: {
        marginTop: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        borderColor: '#f1f1f1',
        borderTopWidth: 1,
        padding: 10
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    scroll: {
        flex: 1,
        padding: 15
    },
    text: {
        marginTop: 80,
        fontSize: 25
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#333'
    }

});

module.exports = my_css;

/* eof */
