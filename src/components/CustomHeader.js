import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import styles from './styles/CustomHeaderStyles';

const CustomHeader = () => {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://www.polpaico.cl/wp-content/uploads/2023/05/LogoPolpaico.png' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.headerContent}>
        <Text style={[styles.title, { fontSize: width * 0.038 }]}>
          Proyecto App Polpaico
        </Text>
        <Text style={[styles.subtitle, { fontSize: width * 0.028 }]}>
          CENTRO DEL SERVICIO AL CLIENTE: 600 6206200
        </Text>
      </View>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.polpaico.cl/contacto/')}>
          <Text style={styles.link}>CONTÁCTANOS</Text>
        </TouchableOpacity>
        <Text style={styles.divider}>|</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://polpaicosoluciones.trabajando.cl')}>
          <Text style={styles.link}>TRABAJA CON NOSOTROS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
