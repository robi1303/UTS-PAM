import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
    },
    a: {
        backgroundColor: 'blue',
        height: 100,
        width: '100%',
        top: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    b:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    },
    
    bawah:{
        flexDirection: 'row',
        alignItems: 'center',
        height:50,
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'white',
        width: '100%',
      },
      bot:{
        paddingHorizontal: 15,
        paddingVertical:5,
        backgroundColor: 'white',
        top:5,
        borderBottomColor:10,
        bottom:10,
        
      },
      ikon:{
        fontSize:15,
        color:'blue',     
      },
});
export default styles;