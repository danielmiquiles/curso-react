import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home</Text>
      <Button
        title="Ir para teste"
        onPress={() => navigation.navigate('Form')}
      />
    </View>
  );
};

export default Home;
