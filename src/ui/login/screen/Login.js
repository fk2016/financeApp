import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, Alert, ActivityIndicator, AsyncStorage, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './Style.js';
import constantsAPI from './../../constantsApi/ConstantsApi';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            show: false
        };
    }

    setVariable(text, field) {

        if (field == 'email') {

            this.setState({
                email: text,
            })

        } else if (field == 'password') {

            this.setState({
                password: text,
            })
        }
    }

    openSignUp() {
        Actions.singup();
    }

    loginAttempt = () => {

        if (this.state.email == '') {

            Alert.alert('Atenção', 'Por favor preencha o campo email');

        } else if (this.state.password == '') {

            Alert.alert('Atenção', 'Por favor preencha o campo senha');

        } else {

            this.setState({
                show: true
            });

            let url = constantsAPI.BASE_URL+constantsAPI.LOGIN;

			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body:{
					"email": this.state.email,
					"password": this.state.password
				}
			})
			.then((response) => response.json())
			.then((response) => {
                
                this.setState({
                    show: false
                });

                let id = JSON.stringify(response.id);

                let name = JSON.stringify(response.name);

                AsyncStorage.setItem('id', id);
                AsyncStorage.setItem('name', name);
                            
                console.log(response);
                        
                Actions.dashboard();
        
			})
			.catch(() => {
                this.setState({
                    show: false
                });
                Alert.alert('Atenção', 'senha incorreta');

			})
			.done()

        }

    }

    render() {

        console.disableYellowBox = true;
        
        return (

            <View style={styles.container}>
                <ScrollView>
                <View style={styles.logoContainer}>

                    <Image
                        style={styles.logo}
                        source={require('../../../assets/images/symbol.png')}
                    />

                </View>
                
                {this.state.show && <ActivityIndicator size="large" color={"#007AFF"} animating={this.state.show} style={{flex: 1, justifyContent: 'center', marginBottom: 5, marginTop: 5 }} />}

                <View>

                    <TextInput
                        keyboardType='email-address'
                        autoCapitalize='none'
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={(text) => this.setVariable(text, 'email')}
                    />
                    <TextInput
                        autoCapitalize='none'
                        placeholder="Senha"
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(text) => this.setVariable(text, 'password')}
                    />

                    <TouchableOpacity onPress={() => this.loginAttempt()}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                </ScrollView>
            </View>

        );
    }
}
