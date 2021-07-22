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
import InitialCleaning from '../assets/initialCleaning.png';
import UpkeepCleaning from '../assets/upkeepCleaning.png';
import Unselect from '../assets/unselect.png';
import Select from '../assets/select.png';

import Binds from '../assets/binds.png';
import Fridge from '../assets/fridge.png';
import Organizing from '../assets/organizing.png';
import Patio from '../assets/patio.png';

export default function YourPlan() {
  const data = [
    {
      image: Fridge,
      text: 'Insight Fridge',
    },
    {
      image: Organizing,
      text: 'Organizing',
    },
    {
      image: Binds,
      text: 'Small Binds',
    },
  ];
  const data2 = [
    {
      image: Patio,
      text: 'Patio',
    },
    {
      image: Organizing,
      text: 'Organizing',
    },
    {
      image: Binds,
      text: 'Small Binds',
    },
  ];
  const [plan, setPlan] = useState('Initial');
  const [planType, setPlanType] = useState('Monthly');
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
          Your Plan
        </Text>
      </View>
      <View
        style={{
          // flexDirection: 'row',
          padding: wp('5%'),
          height: hp('90%'),
          backgroundColor: 'white',
          borderTopRightRadius: wp('10%'),
          borderTopLeftRadius: wp('10%'),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: wp('4%'),
            width: wp('70%'),
          }}>
          Selected Cleaning
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp('2%'),
          }}>
          <View
            style={{
              width: wp('45%'),
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              source={InitialCleaning}
              style={{width: wp('40%'), height: hp('15%')}}></Image>
            <Text
              style={{
                color: 'black',
                fontSize: wp('4%'),
                width: wp('50%'),
                textAlign: 'center',
              }}>
              Initial Cleaning
            </Text>
            {plan === 'Initial' ? (
              <Image
                style={{width: 30, height: 30, marginTop: 10}}
                source={Select}></Image>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setPlan('Initial');
                }}>
                <Image
                  style={{width: 30, height: 30, marginTop: 10}}
                  source={Unselect}></Image>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              width: wp('45%'),
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{width: wp('40%'), height: hp('15%')}}
              source={UpkeepCleaning}></Image>
            <Text
              style={{
                color: 'black',
                fontSize: wp('4%'),
              }}>
              Upkeep Cleaning
            </Text>
            {plan === 'Initial' ? (
              <TouchableOpacity
                onPress={() => {
                  setPlan('upkeep');
                }}>
                <Image
                  style={{width: 30, height: 30, marginTop: 10}}
                  source={Unselect}></Image>
              </TouchableOpacity>
            ) : (
              <Image
                style={{width: 30, height: 30, marginTop: 10}}
                source={Select}></Image>
            )}
          </View>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: wp('4%'),
            width: wp('70%'),
            marginTop: hp('2%'),
          }}>
          Selected Frequency
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp('2%'),
          }}>
          <View
            style={{
              width: wp('30%'),
              flexDirection: 'column',
              alignItems: 'center',

              height: 50,
            }}>
            <TouchableOpacity
              style={{width: '100%'}}
              onPress={() => {
                setPlanType('Weekly');
              }}>
              <Text
                style={[
                  planType === 'Weekly' ? styles.buttonActive : styles.button,
                ]}>
                Weekly
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: wp('30%'),
              flexDirection: 'column',
              alignItems: 'center',
              height: 50,
            }}>
            <TouchableOpacity
              style={{width: '100%'}}
              onPress={() => {
                setPlanType('Bi-Weekly');
              }}>
              <Text
                style={[
                  planType === 'Bi-Weekly'
                    ? styles.buttonActive
                    : styles.button,
                ]}>
                Bi-Weekly
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: wp('30%'),
              flexDirection: 'column',
              alignItems: 'center',
              height: 50,
            }}>
            <TouchableOpacity
              style={{width: '100%'}}
              onPress={() => {
                setPlanType('Monthly');
              }}>
              <Text
                style={[
                  planType === 'Monthly' ? styles.buttonActive : styles.button,
                ]}>
                Monthly
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp('2%'),
          }}>
          {data.map((item, index) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: wp('30%'),
                    height: wp('30%'),
                  }}>
                  <TouchableOpacity
                    style={{
                      width: wp('25%'),
                      height: wp('25%'),
                      backgroundColor: '#003AA8',
                      borderRadius: wp('30%'),
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      setPlanType('Monthly');
                    }}>
                    <Image
                      style={{
                        width:
                          item.text === 'Insight Fridge' ? wp('6%') : wp('10%'),
                        height: wp('10%'),
                      }}
                      source={item.image}></Image>
                  </TouchableOpacity>
                  <Text>{item.text}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp('2%'),
          }}>
          {data2.map((item, index) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: wp('30%'),
                    height: wp('30%'),
                  }}>
                  <TouchableOpacity
                    style={{
                      width: wp('25%'),
                      height: wp('25%'),
                      backgroundColor: '#003AA8',
                      borderRadius: wp('30%'),
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      setPlanType('Monthly');
                    }}>
                    <Image
                      style={{width: wp('10%'), height: hp('5%')}}
                      source={item.image}></Image>
                  </TouchableOpacity>
                  <Text>{item.text}</Text>
                </View>
              </View>
            );
          })}
        </View>
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
