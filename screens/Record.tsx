/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, NativeModules } from 'react-native';
//import {Feather} from '@expo/vector-icons';

const Record = () => {

  if (NativeModules) {
    console.log(NativeModules);
  } else {
    console.log('NativeModules is null');
  }

  const [recording, setRecording] = useState(false);

  const buttonTitle = recording ? 'Recording...' : 'Record';
  const styleButton = recording
    ? [styles.button, styles.recording]
    : [styles.button];
  /* const microphone = recording ? (
    <Feather name="mic-off" size={24} color="black" />
  ) : (
    <Feather name="mic" size={24} color="black" />
  ); */

  const cambiarRecording = () => {
    setRecording(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styleButton} onPress={cambiarRecording}>
        <Text style={{color: '#fff', fontSize: 36}}>{buttonTitle}</Text>
        {/* {microphone} */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#25f',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 50,
    alignItems: 'center',
  },

  recording: {
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowColor: '#11d',
  },
});

export default Record;
