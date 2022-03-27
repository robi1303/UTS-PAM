import { View, Text, Pressable} from 'react-native';
import { MaterialCommunityIcons, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import styles from './style';

const batal = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.a}>
            <Text style={styles.b}>Daftar Pembatalan</Text>
        </View>
        <View style={styles.bawah}>
            <View style={styles.bot}>
            <Pressable style={styles.ikon}
            onPress={() => navigation.navigate('homescreen')}
            >
            <Entypo name="home" size={30} color="blue" />
            <Text style={styles.naviteks}>Beranda</Text>
            </Pressable>
            </View>
            
            <View style={styles.bot}>
            <Pressable style={styles.ikon}
            onPress={() => navigation.navigate('daftar')}
            >
            <FontAwesome5 name="book" size={30} color="blue" />
            <Text style={styles.naviteks}>Pesanan</Text>
            </Pressable>
            </View>
            <View style={styles.bot}>
            <Pressable style={styles.ikon}
            onPress={() => navigation.navigate('batal')}
            >
            <MaterialCommunityIcons name="cash-refund" size={30} color="blue" />
            <Text style={styles.naviteks}>Pembatalan</Text>
            </Pressable>
            </View>
            <View style={styles.bot}>
            <Pressable style={styles.ikon}>
            <MaterialIcons name="reorder" size={30} color="blue" />
            <Text style={styles.naviteks}>Lainnya</Text>
            </Pressable>
            </View>
        </View>
    </View>    
  );
}

export default batal;