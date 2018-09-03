import React, {Component} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import Judul from './Components/Judul';
export default class App extends Component{
  render(){
    return(
      <View style={styles.bg}>
          <Judul/>
          <Image style={styles.gambar}
           source = {require('./content/fotoprofil.jpg')}/>
          <Text style={styles.tulisan_1}> Nama   = Anzalla Dzikri Dhamara</Text>
          <Text style={styles.tulisan_1}> No     = 10</Text>
          <Text style={styles.tulisan_1}> Kelas  = XI RPL 2</Text>
      </View>


    )
  }
}
const styles = StyleSheet.create({
  bg:{
    flex: 1,
    backgroundColor: 'yellow',

  },
  tulisan_1:{
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
  gambar:{
    alignItems: 'center',
    justifyContent: 'center',
    left: 140,
    marginTop: 80,
    marginBottom: 90,
  }


});
