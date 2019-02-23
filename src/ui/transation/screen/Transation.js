import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import {Header, Title, Left, Right, Body, ListItem} from 'native-base' ;
import Icon from 'react-native-vector-icons/EvilIcons'
import {Actions} from 'react-native-router-flux';
import styles from './TransationStyle';

export default class TransationScreen extends Component{
    
    render(){

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

               <View>
                    <View style={styles.block}>
                        <ListItem avatar noBorder>
                            <Left>
                                <Image source={require('../../../assets/images/shape_credit.png')} />
                            </Left>
                            <Body>
                                <Text style={styles.title}>FREELANCE WORK</Text>
                                <Text style={styles.date}>23 Feb 10:32 AM</Text>
                            </Body>
                            <Right>
                                <Text style={styles.value}>R$ 120.80</Text>
                                <Text style={styles.category}>SERVICE</Text>
                            </Right>
                        </ListItem>
                    </View>
               </View>

               <View>
                    <View style={styles.block}>
                        <ListItem avatar noBorder>
                            <Left>
                                <Image source={require('../../../assets/images/shape_credit.png')} />
                            </Left>
                            <Body>
                                <Text style={styles.title}>Freelance Work</Text>
                                <Text style={styles.date}>23 Feb 10:32 AM</Text>
                            </Body>
                            <Right>
                                <Text style={styles.value}>R$ 120.80</Text>
                                <Text style={styles.category}>Service</Text>
                            </Right>
                        </ListItem>
                    </View>
               </View>

            </View>
        );
    }
}

