import {StyleSheet, Text} from 'react-native'
function  Footer(): JSX.Element{
    return(
        
        <Text>This is a <Text style={styles.footerStyle}>Footer </Text> , it has <Text style={styles.italic}> italic,</Text><Text style={styles.bold}>bold</Text> and <Text style={styles.underLine}>underline</Text> text inside </Text>
    )
}

const styles=StyleSheet.create({
    footerStyle:{
        fontSize:20
    },
    italic:{
        fontFamily:'italic',
    },
    bold:{
        fontWeight:'bold',
    },
    underLine:{
        textDecorationLine: 'underline',
    }
})

export default Footer;