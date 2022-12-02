import * as React from 'react';
import { View ,Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import  Colors  from '../constants/Colors';

export const Radios = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <View style={{flexDirection:'row',marginLeft:10, alignItems:'center'}}>
      <View style={{flexDirection:'row',marginLeft:10, alignItems:'center'}}>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={{color:Colors.gray}}>lorem ipsum</Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:10, alignItems:'center'}}>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{color:Colors.gray}}>lorem ipsum</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',marginLeft:20, alignItems:'center'}}>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{color:Colors.gray}}>lorem ipsum</Text>
      </View>
    </View>
  );
};