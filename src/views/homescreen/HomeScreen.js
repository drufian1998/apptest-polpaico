
import React, { useRef, useEffect } from 'react';
import { View, Text, ImageBackground, Animated } from 'react-native';
import CustomFooter from '../../components/CustomFooter';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={{
          uri: 'https://www.polpaico.cl/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-02-at-17.11.43.jpeg',
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>
            Bienvenido a la App Polpaico
          </Animated.Text>
        </View>
      </ImageBackground>
      <CustomFooter
        showLeft={false}
        showRight={true}
        onRightPress={() => navigation.navigate('Glossary')}
      />
    </View>
  );
};

export default HomeScreen;
