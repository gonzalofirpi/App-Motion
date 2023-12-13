/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
// eslint-disable-next-line eslint-comments/no-unused-disable
// eslint-disable-next-line eslint-comments/no-unused-disable
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import Stick from './Stick';
import {StyleSheet, View} from 'react-native';

const Wave = (props: {wave: number[]}) => {
  const waveView = props.wave.map((value, index) => (
    <Stick key={index} value={value} />
  ));

  return <View style={styles.wave}>{waveView}</View>;
};

const styles = StyleSheet.create({
  wave: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default Wave;
