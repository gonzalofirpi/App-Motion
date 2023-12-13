/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';

const Stick = (props: { value: number; }) => {
  return <View style={[styles.stick, {height: props.value}]}></View>;
};

const styles = StyleSheet.create({
  stick: {
    backgroundColor: '#fff',
    width: 2,
    marginRight: 0.8,
    shadowColor: '#fff',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});

export default Stick;
