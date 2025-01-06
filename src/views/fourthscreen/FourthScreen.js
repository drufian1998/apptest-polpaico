import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import CustomFooter from '../../components/CustomFooter';
import styles from './styles';

const FourthScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.mapTitle}>Ubicaciones de Polpaico</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: -33.544,
          longitude: -71.441,
          latitudeDelta: 6.0,
          longitudeDelta: 6.0,
        }}
        tileSource={{
          uri: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        }}
      >
        {/* Marcadores existentes */}
        <Marker
          coordinate={{ latitude: -33.42628, longitude: -70.56656 }}
          title="Oficina El Bosque"
          description="Avenida El Bosque Norte 0177, Las Condes"
        />
        <Marker
          coordinate={{ latitude: -33.47179, longitude: -70.60059 }}
          title="Oficina Quilín"
          description="Avenida Quilín 1601, Macul"
        />
        <Marker
          coordinate={{ latitude: -33.02457, longitude: -71.55262 }}
          title="Oficina Valparaíso"
          description="Avenida 5 Oriente 235, Viña del Mar"
        />
        <Marker
          coordinate={{ latitude: -33.0862, longitude: -70.6801 }}
          title="Planta Cerro Blanco"
          description="Ruta 5 Norte s/n, km 38-Tiltil, Región Metropolitana"
        />
        <Marker
          coordinate={{ latitude: -23.0900, longitude: -70.4450 }}
          title="Planta Mejillones"
          description="Avenida Longitudinal 2500, Barrio Industrial Mejillones, Región de Antofagasta"
        />
        <Marker
          coordinate={{ latitude: -37.0284, longitude: -73.1516 }}
          title="Planta Coronel"
          description="Avenida Golfo de Arauco 3561, Parque Industrial Coronel, Región del Biobío"
        />

        {/* Marcadores adicionales */}
        <Marker
          coordinate={{ latitude: -33.6036, longitude: -70.8005 }}
          title="Planta Santiago"
          description="Panamericana Sur, Km 16, San Bernardo"
        />
        <Marker
          coordinate={{ latitude: -36.8201, longitude: -73.0443 }}
          title="Planta Concepción"
          description="Camino a Coronel Km 14, Hualpén"
        />
        <Marker
          coordinate={{ latitude: -29.915, longitude: -71.252 }}
          title="Planta Coquimbo"
          description="Ruta 5 Norte Km 467, Coquimbo"
        />
        <Marker
          coordinate={{ latitude: -39.8142, longitude: -73.2459 }}
          title="Planta Valdivia"
          description="Ruta T-202, Valdivia"
        />
        <Marker
          coordinate={{ latitude: -41.4717, longitude: -72.9366 }}
          title="Planta Puerto Montt"
          description="Ruta 5 Sur Km 1003, Puerto Montt"
        />
      </MapView>
      <CustomFooter
        showLeft={true}
        showRight={false}
        onLeftPress={() => navigation.navigate('NextScreen')}
      />
    </View>
  );
};

export default FourthScreen;
