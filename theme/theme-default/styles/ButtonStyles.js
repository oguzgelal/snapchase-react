import { StyleSheet } from 'react-native'
import Colors from '../Colors'

export default StyleSheet.create({
    //*** base ***//
    
    base: {
    },
    baseText: {
        flexGrow: 1,
        textAlign: 'center'
    },

    //*** sizes ***//

    medium: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 3,
    },
    mediumText: {
        fontSize: 14
    },

    large: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 35,
        paddingRight: 35,
        borderRadius: 3,
    },
    largeText: {
        fontSize: 18,
        color: Colors.light1,
        flexGrow: 1,
        textAlign: 'center'
    },

    //*** styles ***//

    regular: { backgroundColor: Colors.dark1 },
    regularText: { color: Colors.light1 },

    facebook: { backgroundColor: Colors.facebook },
    facebookText: { color: Colors.light1 },

})