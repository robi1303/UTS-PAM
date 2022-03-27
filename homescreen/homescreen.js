import { StyleSheet, View, Text, Pressable, TextInput} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Fontisto, Entypo, FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';
import DatePicker from "react-native-datepicker";
import styles from './style';

const homescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.kotakjudul}>
        <Text style={styles.judulteks}>KAPALZY</Text>   
    </View>
    <View style={styles.kotak}>
    <View style={styles.awal}>
      <Text style={styles.kotakInputText}>
        Pelabuhan Awal
      </Text>
    <View style={styles.Pilih}>
      <Ionicons name="ios-boat" size={30} color="grey" />
      <Pressable style={styles.PilihPelabuhan}>
        <Text>Pilih pelabuhan Awal</Text>
      </Pressable>
    </View>
    </View>
    <View style={styles.awal}>
      <Text style={styles.kotakInputText}>
        Pelabuhan Tujuan
      </Text>
      <View style={styles.Pilih}>
        <Ionicons name="ios-boat-outline" size={30} color="grey" />
          <Pressable style={styles.PilihPelabuhan}>
            <Text>Pilih pelabuhan Tujuan</Text>
          </Pressable>
      </View>
    </View>
    <View style={styles.awal}>
      <Text style={styles.kotakInputText}>
        Kelas Layanan
      </Text>
      <View style={styles.Pilih}>
        <MaterialCommunityIcons name="seat-passenger" size={30} color="grey" />
          <Pressable style={styles.PilihPelabuhan}>
            <Text>Pilih Layanan</Text>
          </Pressable>
      </View>
    </View>
    <View>
      <Text style={styles.awal}>Tanggal Masuk Pelabuhan</Text>
      <View style={styles.kotakInputText}>
      <DatePicker
        style={styles.kotakInputDate}
        mode="date"
        format="DD/MM/YYYY"
        customStyles={{
          dateIcon: {
              position: 'absolute',
              right: 85,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: "gray",
                alignItems: "flex-start",
                left: 65,
                borderWidth: 0,
                },
            placeholderText: {
                fontSize: 17,
                color: "gray"
                },
            dateText: {
                fontSize: 17,
            }
          }}
      />
      </View>
    </View>
    <View style={styles.awal}>
      <Text style={styles.kotakInputText}>
        Jam Masuk Pelabuhan
      </Text>
      <View style={styles.Pilih}>
        <MaterialCommunityIcons name="clock-time-seven-outline" size={30} color="grey" />
          <Pressable style={styles.PilihPelabuhan}>
            <Text>Pilih Jam Masuk</Text>
          </Pressable>
      </View>
    </View>
    </View>
    <View style={styles.jumlah}>
        <Text style={styles.kotakInputText}>Dewasa</Text>
        <TextInput style={styles.kotakinput}>
        </TextInput>
    </View>
      <Pressable
        style={styles.tombolCari}
        title="cari"
        onPress={() => navigation.navigate('daftar')}
      >
      <AntDesign name="search1" size={24} color="black" />
      <Text style={styles.tombolCariText}>Cari</Text>
      </Pressable> 
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

export default homescreen;