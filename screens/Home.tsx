/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {Button, StatusBar, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {NativeModules} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {requestAudioPermission} from '../util/permissions';

const Home = () => {
  if (NativeModules) {
    console.log(NativeModules.OboeModule);
  } else {
    console.log('NativeModules is null');
  }

  const {OboeModule} = NativeModules;

  const prueba = async () => {
    OboeModule.pruebaOboe('hola');

    requestAudioPermission().then(() => {
      console.log("nose");
      OboeModule.startRecording();
    });
  };

  /* NativeModules.OboeModule.getMessage().then((message: any) => {
    console.log(message);
  });
 */

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.title}>Waves</Text>
        <Text style={styles.summary}>
          Record your sounds and enjoy your emotions
        </Text>
        <Button title="Probar modulo nativo" onPress={prueba} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#434343',
  },

  summary: {
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '100',
  },
});

export default Home;
