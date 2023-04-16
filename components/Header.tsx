import { Text,TextStyle,View } from "react-native"

interface HeaderProps{
    text:string,
    textStyle: TextStyle,
    isTop: boolean,

}

const Header:React.FC<HeaderProps>=({text,textStyle, isTop})=>{
    return(
        <View>
            <Text style={[textStyle, isTop ? {fontWeight:'bold',fontSize:30}:{fontWeight:'normal'}  && { marginTop: 50 }]}>{text}</Text>
        </View>
    );
}



export default Header;