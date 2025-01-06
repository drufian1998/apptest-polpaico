import React, { useState } from 'react';
import { View, FlatList, ImageBackground, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import CustomFooter from '../../components/CustomFooter';
import styles from './styles';

const GlossaryScreen = ({ navigation }) => {
  const plants = [
    {
      id: '1',
      name: 'Oficina El Bosque',
      address: 'Avenida El Bosque Norte 0177, Las Condes',
      image: 'https://www.bienesonline.com/chile/photos/en-el-corazon-de-el-bosque-norte--OFA1431691691367520-647.jpg',
      description:
        'Oficina comercial en Las Condes, Santiago, enfocada en la producción y distribución de cemento y hormigón.',
    },
    {
      id: '2',
      name: 'Oficina Quilín',
      address: 'Avenida Quilín 1601, Macul',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_yvihoHQmZFGnQ4aFze0w_FskMI8nlSi4Q&s',
      description:
        'Centro de despacho y producción de hormigón en Santiago, ofreciendo soluciones integrales para la construcción.',
    },
    {
      id: '3',
      name: 'Oficina Valparaíso',
      address: 'Avenida 5 Oriente 235, Viña del Mar',
      image: 'https://regionesdechile.cl/wp-content/uploads/2024/06/reloj-de-flores-vina-del-mar.jpg',
      description: 'Oficina regional ubicada en Viña del Mar, enfocada en la atención al cliente y la distribución de materiales.',
    },
  ];

  const [expanded, setExpanded] = useState({});
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => {
    const isExpanded = expanded[item.id];
    const descriptionPreview = item.description.slice(0, 100);

    return (
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.carouselBackground}
        imageStyle={{ opacity: 0.3 }}
      >
        <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.carouselContent}>
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselTitle}>{item.name}</Text>
          <Text style={styles.carouselAddress}>{item.address}</Text>
          <Text style={styles.carouselDescription}>
            {isExpanded ? item.description : `${descriptionPreview}...`}
          </Text>
          <Text style={styles.expandText}>
            {isExpanded ? 'Leer menos ↑' : 'Leer más ↓'}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <CustomFooter
        showLeft={true}
        showRight={true}
        onLeftPress={() => navigation.navigate('Home')}
        onRightPress={() => navigation.navigate('NextScreen')}
      />
    </View>
  );
};

export default GlossaryScreen;
