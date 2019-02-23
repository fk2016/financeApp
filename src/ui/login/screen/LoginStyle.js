import { StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/colors/Colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,  
        backgroundColor: colors.gray, 
        height: height,
    },
    logo:{
        marginTop: '30%',
    },
    appName:{
        textAlign: "center",
        marginTop: 10,
        marginLeft: 5,
        fontSize: 22,
        color: colors.white,
        //fontFamily: "Montserrat-Medium",
    },
    session:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    },
    text:{
        position: 'absolute',
        opacity: 0.5,
        backgroundColor: 'transparent',
        color: colors.light_gray,
        fontSize: 14,
        //fontFamily: "Montserrat-Regular",
        letterSpacing: 0.31
    },
    item:{
        marginTop: 14,
    },
    input:{
        borderColor: colors.border,
        borderWidth: 1,
        color: colors.dark,
        backgroundColor: colors.light_gray,
        opacity: 0.5,
        height: 44
    },
    buttonGradient:{
        alignItems: 'center',
        justifyContent: 'center',  
        borderWidth: 1,
        borderRadius: 100,
        borderColor: 'transparent',
        width: 264,
        height: 49,
        backgroundColor: colors.red,
        marginTop: '20%'
    },
    textButton:{
        position: 'absolute',
        color: colors.white,
        fontSize: 17,
        //fontFamily: "Montserrat-Regular",
        letterSpacing: 0.47
    }
});