import React, {Component} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {Header, Text, Title, Left, Right, Body, Input, Item} from 'native-base' ;
import {Actions} from 'react-native-router-flux';
import styles from './InsertStyle';
import { TextInputMask } from 'react-native-masked-text'


export default class InsertScreen extends Component{


    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            money: '',
            type: '',
            category: ''
        };
    }

    setVariable(text, field) {

        if (field == 'title') {

            this.setState({
                title: text,
            })

        } else if (field == 'money') {

            this.setState({
                money: text,
            })
        } else if (field == 'type') {

            this.setState({
                type: text,
            })
        } else if (field == 'category') {

            this.setState({
                category: text,
            })
        }
    }

    insertAttempt = () => {

        if (this.state.title == '') {

            Alert.alert('Atenção', 'Por favor preencha o campo título');

        } else if (this.state.money == '') {

            Alert.alert('Atenção', 'Por favor preencha o campo valor');

        } else if (this.state.type == '') {

            Alert.alert('Atenção', 'Por favor selecione o tipo ');

        }else if (this.state.category == '') {

            Alert.alert('Atenção', 'Por favor selecione a categoria ');

        }else {

            this.setState({
                show: true
            });

            let url = constantsAPI.BASE_URL+constantsAPI.INSERT_DATA;

			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body:{
                    "id": this.state.id,
					"title": this.state.title,
                    "value": this.state.money,
                    "type": this.state.type,
                    "category": this.state.category
				}
			})
			.then((response) => response.json())
			.then((response) => {
                
                console.log(response);
                Alert.alert('Atenção', 'Dados inseridos com sucesso');
			})
			.catch(() => {

                Alert.alert('Atenção', 'Erro ao inserir dados');
			})
			.done()

        }

    }

    
    render(){

        const shadowStyle={
            shadowOpacity: 0.5,
            shadowRadius: 15,
            shadowColor: 'gray',
            shadowOffset: {width: 1, height:1},
        }

        console.disableYellowBox = true;

        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left/>
                    <Body>
                        <Title style={styles.headerTitle}>TRANSAÇÕES</Title>
                    </Body>
                    <Right />
                </Header>

                <View style={styles.sessionValue}>
                    <TextInputMask
                            type={'money'}
                            keyboardType='numeric'
                            autoCapitalize='none'
                            placeholder="R$0,00"
                            autoFocus = {true}  
                            style={styles.input}      
                            returnKeyType='done'         
                            onChangeText={money => this.setState({ money })}
                            value={this.state.money} 
                        />
                </View>

                <View style={styles.sessionAlert}>
                    <Text style={styles.alert}>Eba ! </Text>
                    <Text style={styles.message}>Que bom saber que tem dimdim entrando :)</Text>
                    <Text style={styles.point}>….</Text>
                </View>

                <View style={styles.sessionForm}>
                    <View style={styles.form}>
                        <Input style={styles.input} placeholder='Digite o título' onChangeText={(text) => this.setVariable(text, 'title')} />
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.view}>
                        <View style={styles.form}>
                        <Picker
                            style={styles.input}
                            placeholder='Tipo'
                            onValueChange={(itemValue, itemIndex) => this.setState({card_month: itemValue})}
                            selectedValue={this.state.type}>
                            <Picker.Item label="Receita" value="Receita" />
                            <Picker.Item label="Despesa" value="despesa" />
                        </Picker>
                        </View>
                        <View style={styles.line}/>
                    </View>
                    <View style={styles.view}>
                        <View style={styles.form}>
                            <Picker
                                style={styles.input}
                                placeholder='Categoria'
                                onValueChange={(itemValue, itemIndex) => this.setState({card_month: itemValue})}
                                selectedValue={this.state.category}>
                                <Picker.Item label="Salário" value="Salário" />
                                <Picker.Item label="Bônus" value="Bônus" />
                                <Picker.Item label="Hora extra" value="Hora extra" />
                                <Picker.Item label="Gasolina" value="Gasolina" />
                                <Picker.Item label="Gastos de moradia" value="Gastos de moradia" />
                                <Picker.Item label="Transporte" value="Transporte" />
                                <Picker.Item label="Outros" value="Outros" />
                            </Picker>
                        </View>
                        <View style={styles.line}/>
                    </View>
                </View>  

                <View style={styles.sessionButton}>
                    <TouchableOpacity style={[styles.buttonGradient, shadowStyle]}>
                            <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
                </View>  
            </View>
        );
    }
}

