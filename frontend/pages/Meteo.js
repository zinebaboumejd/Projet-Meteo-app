import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground,Image ,  ScrollView,} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { DataTable } from 'react-native-paper';
import Moment from 'moment';

const key ='78ce849e1e36855431ac5dcb5a77d51a';
export default function Meteo() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // city
  const [city, setCity] = useState(null);
  //  date
  const [date, setDate] = useState(null);
 
  const [data, setData] = useState(null);

  // useEffect ->fetsh api meteo utelese ker et rempler table rows
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log('locatio',location);

  //  fetsh data
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${key}`);
  const data = await response.json();

  // ciry
  setCity(data.city.name);
  // date
  setDate(data.list[0].dt_txt);
  setData(data);

  console.log('data',data);
    })();
  }, []);



  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }



 
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/image1.jpg")}  style={{ width: "100%", height: "100%" }}>
        <View style={styles.View1}>
        <Image style={styles.image} source={require("../assets/weather.png")} />
        <Text style={{position:'absolute',left:200,top:40,fontSize:20,color:'#FFF'}}>
            {date && Moment(date).format('DD/MM HH:mm')}
            </Text>
        <Text style={{position:'absolute',left:200,top:10,fontSize:20,color:'#FFF'}}>
          {city}
            </Text>
            <Text style={{position:'absolute',left:200,top:70,fontSize:20,color:'#FFF'}}>
            {data && Math.round(data.list[0].main.temp - 273.15)} °C
            </Text>
<Text style={{position:'absolute',left:200,top:130,fontSize:20,color:'#FFF'}}>
            {data && data.list[0].main.humidity} %
</Text>
        </View>
         
        <View style={styles.View2}>
          <ScrollView horizontal={true}>
              {data && data.list.map((item,index)=>(
            Moment(item.dt_txt).format('DD/MM') === Moment().format('DD/MM') && (
              <View key={index} style={{width:100,height:100,backgroundColor:'#FFF',margin:10,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:20}}>
                {Moment(item.dt_txt).format('HH:mm')}
              </Text>
              <Text style={{fontSize:20}}>
                {Math.round(item.main.temp - 273.15)} °C
              </Text>
              <Text style={{fontSize:20}}>
                {item.main.humidity} %
              </Text>
        </View>

            )
              ))}
          </ScrollView>

        </View>
        <ScrollView>
        <View style={styles.View3}>
    
        <DataTable>
    <DataTable.Header
      style={{borderBottomWidth:1,borderBottomColor:'rgba(2,0,0,0.2)'}}
    >
      <DataTable.Title>Time</DataTable.Title>
      <DataTable.Title numeric>Temp</DataTable.Title>
      <DataTable.Title numeric>Humidity</DataTable.Title>
      <DataTable.Title numeric>Wind</DataTable.Title>
    </DataTable.Header>


    {data && data.list.map((item,index)=>( 
      <DataTable.Row key={index}>
      <DataTable.Cell>
        {Moment(item.dt_txt).format('DD/MM HH:mm')}
      </DataTable.Cell>
      <DataTable.Cell numeric> {Math.round(item.main.temp - 273.15)} °C</DataTable.Cell>
      <DataTable.Cell numeric>{item.main.humidity}%</DataTable.Cell>
      <DataTable.Cell numeric>{item.wind.speed} km/h</DataTable.Cell>
    </DataTable.Row>
    ))}
 

    </DataTable>
        </View>
</ScrollView> 
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  View1: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderBottomLeftRadius:'10px',
    borderBottomRightRadius:'10px'
  },
  View2: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  View2_1: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection:'row',
    backgroundColor: "rgba(0,0,0,0.4)",
    borderBottomLeftRadius:'10px',
    borderBottomRightRadius:'10px'
  },

  View3: {
    width: "100%",
    // height: "60%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px'
  },
  image: {
    width: 100, 
    height: 100,
    position:'relative',
    right:100  
  }
});
