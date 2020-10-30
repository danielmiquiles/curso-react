import React from 'react';
import {Button, Text, View} from 'react-native';

const Form = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Form</Text>
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Form;
