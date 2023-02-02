import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-paper';

export default function Home({navigation}) {

 
  return (
    <View style={styles.container}>
        {/* <ImageBackground source={require('../assets/image1.jpg')} style={{width: '100%', height: '100%'}}> */}
        <Text >Home</Text>
        <Button 
        style={styles.button}
         title='navigate to meteo'
        onPress={()=>navigation.navigate('Meteo')}
        >
            Meteo
        </Button>

        <Button 
        style={styles.button}
        title='navigate to Login' 
        onPress={()=>navigation.navigate('Login')}
        >
            Login
        </Button>
        <Button
        style={styles.button}
        title='navigate to Register'
        onPress={()=>navigation.navigate('Register')}
        >

            Register
        </Button>
       
        {/* </ImageBackground> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'#000',
    color:'#FFF',
    padding:10,
    borderRadius:10,
    margin:10

  }

});
