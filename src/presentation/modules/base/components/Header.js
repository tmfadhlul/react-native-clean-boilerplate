import React from 'react';
import {Text, View, Image} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 26,
            color: 'rgba(0,0,0,0.65)',
          }}>
          Clean Architecture
        </Text>
      </View>
      <View
        style={{
          overflow: 'hidden',
          borderRadius: 100,
          height: 40,
          width: 40,
        }}>
        <Image
          style={{
            width: 40,
            height: 60,
          }}
          source={require('@assets/image/profile.jpeg')}
        />
      </View>
    </View>
  );
};

export default Header;
