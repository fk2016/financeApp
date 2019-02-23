import { StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/colors/Colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    root: {
        backgroundColor: "rgba(0,0,0,1)",
        flex: 1
      },
      painelTransation: {
        position: "absolute",
        top: "72.56%",
        left: "5.33%",
        height: "25.04%",
        width: "89.60%",
        borderRadius: 6,
      },
      credito: {
        position: "absolute",
        top: "8.98%",
        left: "5.95%",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        //fontFamily: "Helvetica",
        letterSpacing: 0.4
      },
      ethereum: {
        position: "absolute",
        top: "26.35%",
        left: "5.95%",
        opacity: 0.5,
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 12,
        //fontFamily: "Heebo-Light",
        letterSpacing: 0.37
      },
      vizualizar: {
        position: "absolute",
        top: "14.97%",
        left: "71.43%",
        backgroundColor: "transparent",
        textAlign: "right",
        color: "rgba(0,255,200,1)",
        fontSize: 14,
        //fontFamily: "Helvetica",
        letterSpacing: 0.43
      },
      debito: {
        position: "absolute",
        top: "62.87%",
        left: "5.95%",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        //fontFamily: "Helvetica",
        letterSpacing: 0.4
      },
      bitcoinCash: {
        position: "absolute",
        top: "80.24%",
        left: "5.95%",
        opacity: 0.5,
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 12,
        //fontFamily: "Heebo-Light",
        letterSpacing: 0.37
      },
      vizualizar1: {
        position: "absolute",
        top: "69.46%",
        left: "71.43%",
        backgroundColor: "transparent",
        textAlign: "right",
        color: "rgba(212,34,89,1)",
        fontSize: 15,
        //fontFamily: "Helvetica",
        letterSpacing: 0.37
      },
      subtitle: {
        position: "absolute",
        top: "67.77%",
        left: "6.93%",
        height: "2.55%",
        width: "30.93%"
      },
      lancamentos: {
        position: "absolute",
        top: "0.00%",
        left: "0.00%",
        opacity: 0.5,
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        //fontFamily: "Helvetica",
        letterSpacing: 0.45
      },
      painelValue: {
        position: "absolute",
        top: "13.04%",
        left: "5.60%",
        height: "18.44%",
        width: "69.33%"
      },
      style: {
        position: "absolute",
        top: "0.00%",
        left: "13.08%",
        backgroundColor: "transparent",
        textAlign: "center",
        color: "rgba(255,255,255,1)",
        fontSize: 40,
        //fontFamily: "Heebo-Medium",
        letterSpacing: 0.36
      },
      r: {
        position: "absolute",
        top: "5.69%",
        left: "2.12%",
        backgroundColor: "transparent",
        textAlign: "center",
        color: "rgba(255,255,255,1)",
        fontSize: 20,
        //fontFamily: "Helvetica",
        letterSpacing: 0.18
      },
      r273992: {
        position: "absolute",
        top: "78.86%",
        left: "56.54%",
        backgroundColor: "transparent",
        color: "rgba(168,168,168,1)",
        fontSize: 18,
        //fontFamily: "Helvetica",
        letterSpacing: 0.4
      },
      despesas: {
        position: "absolute",
        top: "62.60%",
        left: "56.54%",
        backgroundColor: "transparent",
        color: "rgba(255,35,102,1)",
        fontSize: 14,
        //fontFamily: "Helvetica",
        letterSpacing: 1.27
      },
      economia: {
        position: "absolute",
        top: "63.41%",
        left: "0.00%",
        backgroundColor: "transparent",
        color: "rgba(0,255,200,1)",
        fontSize: 13,
        //fontFamily: "Helvetica",
        letterSpacing: 1.18
      },
      r198038: {
        position: "absolute",
        top: "78.86%",
        left: "0.00%",
        backgroundColor: "transparent",
        color: "rgba(168,168,168,1)",
        fontSize: 18,
        //fontFamily: "Helvetica",
        letterSpacing: 0.4
      },
      verTodos: {
        position: "absolute",
        top: "68.22%",
        left: "74.93%",
        backgroundColor: "transparent",
        textAlign: "right",
        color: "rgba(0,255,200,1)",
        fontSize: 12,
        //fontFamily: "Helvetica",
        letterSpacing: 0.43
      },
      line: {
        position: "absolute",
        top: "43.93%",
        left: "0.27%",
        height: "12.14%",
        width: "99.73%",
        backgroundColor: "transparent"
      },
      chartCredit: {
        position: "absolute",
        top: "89.51%",
        left: "34.93%",
        height: "3.75%",
        width: "30.40%",
        backgroundColor: "transparent"
      },
      chartDebit: {
        position: "absolute",
        top: "76.76%",
        left: "35.20%",
        height: "3.75%",
        width: "30.13%",
        backgroundColor: "transparent"
      }
});