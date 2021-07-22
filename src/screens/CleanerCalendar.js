import React, {useState} from 'react';
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WeeklyCalendar from 'react-native-weekly-calendar';
import moment from 'moment';

import Envelope from '../assets/envelope.png';
import Telephone from '../assets/telephone.png';
import Star from '../assets/star.png';
import Paid from '../assets/paid.png';
import Clock from '../assets/clock.png';
import User from '../assets/user.png';
import Hook from '../assets/hook.png';

export default function Account() {
  const [plan, setPlan] = useState('Initial');
  const [planType, setPlanType] = useState('Monthly');
  const [date, setDate] = useState(
    new moment(new Date()).format('MMMM Do YYYY'),
  );
  const data = [
    {
      time: '10 am',
      image: User,
      paid: false,
      user: 'Umair Mukhtar',
      type: 'Upkeep Cleaning',
      timePeriod: '10AM - 11AM',
      clientRating: 3,
    },
    {
      time: '10 am',
      image: User,
      paid: true,
      user: 'Umair Mukhtar',
      type: 'Upkeep Cleaning',
      timePeriod: '10AM - 11AM',
      clientRating: 5,
    },
    {
      time: '10 am',
      image: User,
      paid: true,
      user: 'Umair Mukhtar',
      type: 'Upkeep Cleaning',
      timePeriod: '10AM - 11AM',
      clientRating: 3,
    },
    {
      time: '10 am',
      image: User,
      paid: true,
      user: 'Umair Mukhtar',
      type: 'Upkeep Cleaning',
      timePeriod: '10AM - 11AM',
      clientRating: 3,
    },
  ];

  return (
    <View style={{height: hp('100%'), backgroundColor: '#003AA8'}}>
      <View
        style={{
          height: hp('10%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: wp('6%'),
            width: wp('70%'),
            textAlign: 'center',
          }}>
          Cleaner Calendar
        </Text>
      </View>
      <View
        style={{
          height: hp('15%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <WeeklyCalendar
          // events={[]}
          onDayPress={e => {
            console.log('This is e', e);
            setDate(new moment(e).format('MMMM Do YYYY'));
          }}
          displaySchedule={false}
          selectedDayBackground="#FFBF67"
          themeColor="white"
          weekBorderColor="#003AA8"
          dayLabelStyle={{color: 'white'}}
          style={{
            width: '100%',
            backgroundColor: '#003AA8',
            borderColor: '#003AA8',
          }}
          titleStyle={{color: 'white'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          padding: wp('5%'),
          height: hp('75%'),
          backgroundColor: 'white',
          width: wp('100%'),
          borderTopRightRadius: wp('10%'),
          borderTopLeftRadius: wp('10%'),
          alignItems: 'center',
          // transform([{}])
        }}>
        <Image
          source={Hook}
          style={{
            marginTop: hp('-3.7%'),
            transform: [{scale: 0.8}, {scaleX: 0.99}],
          }}></Image>
        <Text style={{marginTop: wp('-10%'), width: '100%'}}>{date}</Text>
        <ScrollView style={{marginTop: wp('5%')}}>
          {data.map(item => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  height: hp('25%'),
                  marginTop: hp('2%'),
                  overflow: 'hidden',
                }}>
                <Text style={{fontWeight: 'bold'}}>{item.time}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('70%'),
                    marginLeft: wp('5%'),
                    backgroundColor: '#DFDEFF',
                    padding: 20,
                    borderRadius: 4,
                  }}>
                  <View style={{width: '70%'}}>
                    <Text style={{color: '#003AA8', fontWeight: 'bold'}}>
                      {item.user}
                    </Text>
                    <Text
                      style={{
                        color: '#464646',
                        fontSize: wp('3.2%'),
                        marginTop: hp('1%'),
                      }}>
                      {item.type}
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: hp('1%')}}>
                      <Image
                        source={Clock}
                        style={{
                          transform: [{scale: 0.7}, {scaleX: 0.99}],
                        }}></Image>
                      <Text
                        style={{
                          color: '#003AA8',
                          fontSize: wp('3.2%'),
                        }}>
                        {item.timePeriod}
                      </Text>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: hp('1%')}}>
                      <Text
                        style={{
                          color: '#003AA8',
                          fontSize: wp('3.2%'),
                        }}>
                        Client Rating
                      </Text>
                      {[1, 2, 3, 4, 5].map(num => {
                        if (num <= item.clientRating) {
                          return (
                            <Image
                              source={Star}
                              style={{
                                transform: [{scale: 0.5}],
                              }}></Image>
                          );
                        }
                      })}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: hp('3%'),
                      }}>
                      <Image
                        source={Envelope}
                        style={{
                          transform: [{scale: 0.8}],
                          tintColor: '#003AA8',
                        }}></Image>
                      <Image
                        source={Telephone}
                        style={{
                          transform: [{scale: 0.8}],
                          marginLeft: wp('5%'),
                          tintColor: '#003AA8',
                        }}></Image>
                    </View>
                  </View>
                  <View style={{width: '30%'}}>
                    <Image
                      source={User}
                      style={{
                        transform: [{scale: 0.5}],
                        marginTop: wp('-10%'),
                        borderRadius: wp('50%'),
                      }}></Image>
                    {item.paid ? (
                      <Image
                        source={Paid}
                        style={{
                          transform: [{scale: 0.7}],
                          marginTop: wp('-5%'),
                          marginLeft: wp('-7%'),
                        }}></Image>
                    ) : (
                      <Text
                        style={{
                          color: '#003AA8',
                          fontSize: wp('3.2%'),
                          fontWeight: 'bold',
                          marginTop: wp('15%'),
                          marginLeft: wp('7%'),
                        }}>
                        $150
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            );
          })}
          {/* <Image
            source={Paid}
            style={{
              transform: [{scale: 0.1}],
              marginLeft: wp('-50%'),
            }}></Image> */}
        </ScrollView>
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
