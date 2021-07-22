import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../assets/logo.png';
import Landing from '../assets/landing.png';
import {Actions} from 'react-native-router-flux';

export default function Home() {
  return (
    <View style={{backgroundColor: '#003AA8', height: hp('100%')}}>
      <View
        style={{
          height: hp('10%'),
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Image source={Logo}></Image>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: wp('12%'),
            width: wp('70%'),
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: hp('4%'),
          }}>
          Clean Home Clean Life
        </Text>
        {/* <View style={{width: '100%'}}></View> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: hp('1%'),
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: wp('5%'),
            width: wp('70%'),
            textAlign: 'center',
          }}>
          Book Cleaners at the Comfort of you home.
        </Text>
      </View>
      <View
        style={{
          height: hp('25%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={Landing}
          style={{width: wp('100%'), height: hp('80%')}}></Image>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', bottom: 5, right: 0}}
        onPress={() => {
          Actions.push('calendar');
        }}>
        <Text style={[styles.button]}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    color: 'black',
    width: wp('40%'),
    height: hp('8%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    // borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    color: '#003AA8',
    fontWeight: 'bold',
  },
});
