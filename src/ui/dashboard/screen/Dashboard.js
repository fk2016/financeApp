import React, { Component } from "react";
import { View, Text, Image,} from "react-native";
import styles from './DashboardStyle'

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.painelTransation}>
          <Text style={styles.credito}>CRÉDITO</Text>
          <Text style={styles.ethereum}>Ethereum</Text>
          <Text style={styles.vizualizar}>VIZUALIZAR</Text>
          <Text style={styles.debito}>DÉBITO</Text>
          <Text style={styles.bitcoinCash}>Bitcoin Cash</Text>
          <Text style={styles.vizualizar1}>VIZUALIZAR</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.lancamentos}>LANÇAMENTOS:</Text>
        </View>
        <View style={styles.painelValue}>
          <Text style={styles.style}>751.42 </Text>
          <Text style={styles.r}>R$</Text>
          <Text style={styles.r273992}>R$ 2739.92</Text>
          <Text style={styles.despesas}>DESPESAS</Text>
          <Text style={styles.economia}>ECONOMIA</Text>
          <Text style={styles.r198038}>R$ 1980.38</Text>
        </View>
        <Text style={styles.verTodos}>VER TODOS</Text>
        <Image
          source={require('../../../assets/images/line.png')}
          style={styles.line}
        />
        <Image
          source={require('../../../assets/images/chart_debit.png')}
          style={styles.chartCredit}
        />
        <Image
          source={require('../../../assets/images/chart_credit.png')}
          style={styles.chartDebit}
        />
      </View>
    );
  }
}
