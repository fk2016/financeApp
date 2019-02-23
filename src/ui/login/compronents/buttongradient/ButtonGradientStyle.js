import { StyleSheet} from 'react-native';
import colors from '../../../../assets/colors/Colors'

export default StyleSheet.create({
    linear:{
        flex: 1,  
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',  
        borderWidth: 1,
        borderRadius: 100,
        position: 'absolute',
    },
    text:{
        position: 'absolute',
        color: '#FFF',
        fontSize: 17,
        //fontFamily: "Heebo-Regular",
        letterSpacing: 0.47
    },
});