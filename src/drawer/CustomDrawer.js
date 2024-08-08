import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CommonCard from '../common/CommonCard';

const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text
          style={{
            color: '#00FFFF',
            fontSize: 27,
            fontWeight: '700',
            textAlign: 'center',
            
          }}>
          Login Success
        </Text>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            height: 70,
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            borderBottomColor: '#C7C7C7',
            borderTopColor: '#C7C7C7',
          }}>
          <CommonCard
            icon={require('../checkbox.png')}
            title={'All Inboxes'}
            onClick={() => {
              navigation.closeDrawer();
            }}
          />
        </View>
        <CommonCard
          icon={require('../checkbox.png')}
          bgColor={'#FFE4E4'}
          title={'Primary'}
          onClick={() => {
            navigation.closeDrawer();
          }}
        />
        <CommonCard
          icon={require('../checkbox.png')}
          newColor={'green'}
          isNew={true}
          title={'Social'}
          onClick={() => {
            navigation.closeDrawer();
          }}
        />
        <CommonCard
          icon={require('../checkbox.png')}
          newColor={'blue'}
          isNew={true}
          title={'Promotions'}
          onClick={() => {
            navigation.closeDrawer();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
