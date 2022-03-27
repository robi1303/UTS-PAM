import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    kotakjudul: {
      width: '90%',
      height: '70%',
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10,
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
    },
  
    judulteks:{
      marginTop: '10%',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 25
    },
    kotak: {
      width: '90%',
      height: 40,
      backgroundColor: 'white',
      position: 'absolute',
      top: 220,
      borderRadius: 20,
      padding: 10,
      borderBottomColor:'black',
    },
    kotakInputText:{
      fontWeight: 'bold',
      color:'grey',
      bottom: 5,
      
    },
    PilihPelabuhan:{
      backgroundColor:'lightgrey',
      color:'grey',
      paddingLeft:15,
      height:25,
      borderWidth:1,
      width:200,
      borderBottomEndRadius:1,
      borderColor: 'grey',
      left:30,
      marginBottom: 0,
    },
    Pilih:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom:10,
      left:20,
      
    },
    jumlah:{
      marginBottom:20,
      top:-110,
      flexDirection: 'row',
      right: 20,
    },
    total:{
      backgroundColor:'lightgrey',
      color:'grey',
      paddingLeft:10,
      height:25,
      borderWidth:1,
      width:250,
      borderBottomEndRadius:1,
      borderColor: 'grey',

    },
    tombolCari:{
      backgroundColor: 'gold',
      width: 200,
      height: 40,
      bottom: 100,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
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
    kotakinput:{
      width: 200,
      height: 20,
      backgroundColor: 'lightgrey',
      left: 25,
      borderColor: 'grey',
      borderWidth: 1,
    }
  });

  export default styles;
  