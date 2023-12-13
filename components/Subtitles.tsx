/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import subtitles from '../util/subtitles';

const SUBTITLES = subtitles;

const setSubtitleStyle = (text: string) => {
  if (!text) {
    return;
  }

  const subtitles = text.split('');

  if (subtitles[subtitles.length - 1] === '!') {
    return styles.shout;
  }

  return null;
};

export default function Subtitles(props: { advance: number; pause: boolean; }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState({start: 0, end: 0, text: ""});

  useEffect(() => {
    if (props.advance === 0) {
      setCurrentTime(0);
      return;
    }
  }, [props.advance]);

  useEffect(() => {
    if (!props.pause) {
      const timer = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1000);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      return;
    }
  }, [props.pause]);

  useEffect(() => {
    for (const subtitle of SUBTITLES) {
      if (currentTime >= subtitle.start && currentTime <= subtitle.end) {
        setCurrentSubtitle(subtitle);
        return;
      }
    }
    setCurrentSubtitle({start: 0, end: 0, text: ""});
  }, [currentTime]);

  return (
    <View style={styles.container}>
      {currentSubtitle && (
        <Text style={[styles.subtitle, setSubtitleStyle(currentSubtitle.text)]}>
          {currentSubtitle.text}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  subtitle: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    fontSize: 16,
  },

  shout: {
    color: '#f00',
    textTransform: 'uppercase',
  },
});
