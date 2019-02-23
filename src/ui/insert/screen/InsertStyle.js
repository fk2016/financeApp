import { StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/colors/Colors';

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        backgroundColor: colors.gray, 
        height: height,
    },
    header:{
        backgroundColor: colors.gray
    },
    headerTitle:{
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: colors.white,
        fontSize: 16,
        //fontFamily: "Montserrat-Medium",
        letterSpacing: 0.19,
    },
    sessionValeu:{
        flexDirection: 'row',
        marginTop: 10
    },
    moneySymbol:{
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: colors.white,
        fontSize: 20,
        //fontFamily: "Montserrat-Medium",
        letterSpacing: 0.18
    },
    value:{
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: colors.white,
        fontSize: 40,
        //fontFamily: "Montserrat-Medium",
        letterSpacing: 0.36
    },
    sessionAlert:{
        opacity: 0.7,
        backgroundColor: 'transparent',
        top: '10%',
        marginLeft: 20,
        marginRight: 20,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
    },
    alert:{
        backgroundColor: 'transparent',
        color: colors.white,
        fontSize: 18,
        //fontFamily: "Montserrat-Regular",
        letterSpacing: 0.4
    },
    message:{
        marginTop: 5,
        backgroundColor: 'transparent',
        color: colors.white,
        fontSize: 13,
        //fontFamily: "Montserrat-Regular",
        letterSpacing: 0.29,
    },
    point:{
        marginTop: 5,
        opacity: 0.5,
        backgroundColor: 'transparent',
        color: colors.white,
        fontSize: 13,
        //fontFamily: "Montserrat-Regular",
        letterSpacing: 0.29,
    },
    sessionForm:{
        marginLeft: 10,
        marginRight: 10,
        top: '20%',
    },
    form:{
        flexDirection: 'row',
    },
    input:{
        textAlign: 'right',
        backgroundColor: 'transparent',
        fontSize: 14,
        color: colors.white,
        //fontFamily: "Montserrat-Regular",
        letterSpacing: 0.31,
        left: '10%',
    },
    text:{
        textAlign: 'left',
        backgroundColor: 'transparent',
        fontSize: 14,
        color: colors.light_gray,
        //fontFamily: "Montserrat-Regular",
        letterSpacing: 0.31,
        marginTop: 15
    },
    view:{
        marginTop: 20
    },
    line:{
        width: width - 20,
        height: 0.3,
        backgroundColor: colors.light_gray,
        justifyContent: 'center',
    },
    sessionButton:{
        justifyContent: 'center', 
        alignItems: 'center',
        top: '25%',
    },
    buttonGradient:{
        borderWidth: 1,
        borderRadius: 100,
        borderColor: 'transparent',
        width: 264,
        height: 49,
        backgroundColor: colors.red,
    },
    textButton:{
        color: colors.white,
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
        //fontFamily: "Montserrat-Regular",
        letterSpacing: 0.47
    }
});


    