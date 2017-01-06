
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
    TextInput,
    AlertIOS,
    TouchableHighlight,
    NavigatorIOS
} from 'react-native';

const my_css = require( './assets/stylesheets/styles' );

class Nicks extends Component {
    render() {
        return (
            <View style={{ borderColor: "#333", borderWidth: 1, padding: 10, margin: 10 }}>
                <Text>Holla!! {this.props.name}</Text>
            </View>
        );
    }
}

export default class Previsao extends Component {

    render() {

        let my_image = {
            uri : 'https://facebook.github.io/react/img/logo_og.png'
        };

        return (
            <View style={ my_css.main }>
                <StatusBar
                    backgroundColor="blue"
                    //barStyle="light-content"
                />
                <Navigator
                    initialRoute={{ statusBarHidden: false, setBackgroundColor: "#f00" }}
                    renderScene={( route, navigator ) =>
                        <View>
                            <StatusBar/>
                        </View>
                    }
                />
                <View style={[{ flex: 3 }, my_css.space ]}>
                    <View style={{ flex: 3, backgroundColor: "powderblue" }}><Nicks name="Maxsss! =)"></Nicks></View>
                    <View style={{ flex: 4, backgroundColor: "skyblue" }}>
                        <TextInput style={ my_css.textInput }
                            placeholder = 'Nome da Cidade...'
                            onEndEditing = { event => this.nextScreen( event.nativeEvent.text ) }
                        />
                    </View>
                </View>

                <TouchableHighlight onPress={ () => AlertIOS.alert(
                    'Hi There!',
                    'Max RLZ'
                )}>
                    <View style={{ alignItems: 'center', paddingBottom: 15 }}>
                        <Image source={ my_image } style={[ my_css.space, my_css.img1 ]} />
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

var MainNav = React.createClass({
 render: function() {
   return (
     <NavigatorIOS
       initialRoute={{
         component: Previsao,
         title: 'MyFirstProject'
       }}
       style={{ flex: 1 }} />
   );
 }
});

var NextScreen = React.createClass({
 render: function() {
   return (
     <View style = {{ backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
       <Text style = {{ color: '#fff', fontSize: 22 }} >
         You entered: { this.props.my_input }
       </Text>
     </View>
   );
 }
});

AppRegistry.registerComponent('moot', () => MainNav);
