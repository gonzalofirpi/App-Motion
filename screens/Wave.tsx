/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Button,
    SafeAreaView,
  } from "react-native";
  import { getWaveForms } from "../util/utils";
  import MaskedView from "@react-native-masked-view/masked-view";
  import Wave from "../components/Wave";
  import { useState, useRef } from "react";
  import Subtitles from "../components/Subtitles";
  // eslint-disable-next-line no-trailing-spaces
  
  const WAVEFORMS = getWaveForms();
  
  const WaveScreen = () => {
    const [x, setX] = useState(0);
    const xAnimado = useRef(new Animated.Value(x)).current;
  
    const [restante, setRestante] = useState(WAVEFORMS.length);
    const [pausado, setPausado] = useState(true);
  
    const [prueba, setPrueba] = useState(100);
    const pruebaAnimada = useRef(new Animated.Value(prueba)).current;
  
    const cambiarPrueba = () => {
      // Will change pruebaAnimada value to 1 in 5 seconds
      Animated.timing(pruebaAnimada, {
        toValue: prueba + 20,
        duration: 5000,
        useNativeDriver: false,
      }).start();
  
      setPrueba(prueba + 20);
    };
  
    const reiniciarPrueba = () => {
      setPrueba(100);
    };
  
    const reproducir = () => {
      setPausado(false);
      Animated.timing(xAnimado, {
        toValue: x + restante,
        duration: 56000,
        useNativeDriver: false,
      }).start();
  
      setX(x + 50);
    };
  
    const pausar = () => {
      setPausado(true);
      setRestante(WAVEFORMS.length - x);
  
      Animated.timing(xAnimado, {
        toValue: xAnimado,
        duration: 5000,
        useNativeDriver: false,
      }).start();
    };
  
    const reiniciar = () => {
      Animated.timing(xAnimado, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
  
      setX(0);
    };
  
    console.log(xAnimado);
  
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.prueba, { width: pruebaAnimada }]}
        ></Animated.View>
        <Button onPress={cambiarPrueba} title="Aumentar" />
        <Button onPress={reiniciarPrueba} title="Reiniciar" />
  
        {/* <ScrollView horizontal={true}></ScrollView> */}
        <SafeAreaView style={styles.waveContainer}>
          <MaskedView
            style={{ flex: 1, flexDirection: "row", height: "100%" }}
            maskElement={
              <View style={styles.masked}>
                <Wave wave={WAVEFORMS} />
              </View>
            }
          >
            <Animated.View style={[styles.progress, { width: xAnimado }]} />
            <View style={{ flex: 1, backgroundColor: "#fff" }} />
          </MaskedView>
        </SafeAreaView>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={reiniciar}>
            <Text style={{ color: "#fff", fontSize: 24 }}>Reiniciar</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button} onPress={pausar}>
            <Text style={{ color: "#fff", fontSize: 24 }}>Pausar</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button} onPress={reproducir}>
            <Text style={{ color: "#fff", fontSize: 24 }}>Reproducir</Text>
          </TouchableOpacity>
        </View>
        <Subtitles pause={pausado} /* advance={xAnimado} */ advance={x} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#bcbcbc",
      alignItems: "center",
      justifyContent: "center",
    },
  
    waveContainer: {
      borderWidth: 2,
      borderRadius: 16,
      width: "100%",
      height: "40%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      position: "relative",
    },
  
    masked: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  
    progress: {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "#e27",
      top: 0,
      left: 0,
      bottom: 0,
      width: "100%",
    },
  
    buttons: {
      flexDirection: "row",
      marginLeft: 20,
      marginRight: 20,
    },
  
    button: {
      backgroundColor: "#25f",
      height: 60,
      width: 120,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 24,
      borderRadius: 8,
      margin: 10,
    },
  
    prueba: {
      backgroundColor: "red",
      height: 70,
      marginTop: 60,
    },
  });
  
  export default WaveScreen;