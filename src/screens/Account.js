import React, {useState} from 'react';
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

import Address from '../assets/address.png';
import Calendar from '../assets/calendar.png';
import Notification from '../assets/notification.png';
import BlueTick from '../assets/bluetick.png';
import Girl from '../assets/girl.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Gmail from '../assets/gmail.png';

export default function Account() {
  const [plan, setPlan] = useState('Initial');
  const [planType, setPlanType] = useState('Monthly');
  const data = [
    {
      name: 'Notifications',
      image: Notification,
    },
    {
      name: 'My Booking',
      image: Calendar,
    },
    {
      name: 'My Plans',
      image: BlueTick,
    },
    {
      name: 'Address',
      image: Address,
    },
  ];

  const data2 = [
    {
      name: 'Facebook',
      image: Facebook,
    },
    {
      name: 'Twitter',
      image: Twitter,
    },
    {
      name: 'Gmail',
      image: Gmail,
    },
  ];
  return (
    <View style={{height: hp('100%'), backgroundColor: '#003AA8'}}>
      <View
        style={{
          height: hp('25%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={Girl}
          style={{
            height: 100,
            width: 100,
          }}></Image>
      </View>
      <View
        style={{
          // flexDirection: 'row',
          padding: wp('5%'),
          height: hp('75%'),
          backgroundColor: 'white',
          borderTopRightRadius: wp('10%'),
          borderTopLeftRadius: wp('10%'),
          // backgroundColor: '#FAFAFA',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: wp('6%'),
            marginBottom: wp('6%'),
            width: wp('70%'),
            fontWeight: 'bold',
          }}>
          Account
        </Text>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderBottomColor: '#F1F1F1',
                borderBottomWidth: 1,
                height: hp('8%'),
                alignItems: 'center',
                backgroundColor: 'white',
              }}
              key={index}>
              <Image source={item.image}></Image>
              <Text
                style={{
                  color: '#404040',
                  fontSize: wp('6%'),
                  marginLeft: wp('10%'),
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Text
          style={{
            color: 'black',
            fontSize: wp('6%'),
            marginBottom: wp('6%'),
            width: wp('70%'),
            fontWeight: 'bold',
          }}>
          Share
        </Text>
        {data2.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderBottomColor: '#F1F1F1',
                borderBottomWidth: 1,
                height: hp('8%'),
                alignItems: 'center',
                backgroundColor: 'white',
              }}
              key={index}>
              <Image source={item.image}></Image>
              <Text
                style={{
                  color: '#404040',
                  fontSize: wp('6%'),
                  marginLeft: wp('10%'),
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    height: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 4,
    color: 'black',
  },
  buttonActive: {
    borderWidth: 1,
    borderColor: '#DC4F89',
    backgroundColor: '#DC4F89',
    width: '90%',
    height: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 4,
    color: 'white',
  },
});
