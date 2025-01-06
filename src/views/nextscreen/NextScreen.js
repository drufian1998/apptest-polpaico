import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import CustomFooter from '../../components/CustomFooter';
import styles from './styles';

const NextScreen = ({ navigation }) => {
  const noticias = [
    {
      id: 1,
      titulo: 'Polpaico Soluciones busca aumento de capital para fortalecer su posición financiera',
      fecha: '5 de diciembre de 2024',
      texto: 'Detalle: La empresa anunció un aumento de capital por $80 mil millones, con la emisión de 11.706.175 acciones a un precio de $6.834 por acción. Esta medida busca fortalecer su posición financiera tras reportar pérdidas de $5.265 millones hasta septiembre de 2024.',
      imagen1: 'https://www.portalminero.com/wp/wp-content/uploads/2019/07/polpaico-600x400.jpg',
      imagen2: 'https://yt3.googleusercontent.com/vEENkBHmXN-IBxGSxiys-ue-N5qTP7Nl8Sp7udFmUk16HkbDj6Pib-ZO0DpEDUH7ET_jsxJa5e8=s900',
    },
    {
      id: 2,
      titulo: 'Proyecto de hormigón sostenible de Polpaico gana premio en Edifica 2024',
      fecha: 'Octubre de 2024',
      texto: 'Detalle: El proyecto "Mueve RCD", desarrollado por Polpaico en conjunto con SalfaCorp, Subcargo y Aceros AZA, fue uno de los ganadores del Reto Economía Circular en Edifica 2024. Este proyecto se centra en la creación de hormigón circular a partir de residuos del acero, representando un avance significativo en la reducción de desechos en la industria de la construcción.',
      imagen1: 'https://ugc.production.linktr.ee/bf1483d1-0564-4861-be0c-985529547992_u6tefovc0Gp8KmNPBcVIDEZ-kOeQP-ta0S1iSf8O0suwyY6kbFUirin22SQ9bpRdX-D9.png?io=true&size=thumbnail-stack-v1_0',
      imagen2: 'https://www.hormiglass.cl/wp-content/uploads/2024/11/Hormigon-a-partir-de-CO2-para-una-construccion-mas-sostenible1.jpg',
    },
    {
      id: 3,
      titulo: 'Polpaico Soluciones obtiene el primer lugar del premio Socio Destacado',
      fecha: 'Noviembre de 2024',
      texto: 'Detalle: Polpaico Soluciones fue reconocida con el primer lugar en la categoría "Socio Destacado" por el Chile Green Building Council. Este premio destaca el compromiso de la empresa con la construcción sostenible y sus esfuerzos por promover prácticas amigables con el medio ambiente en la industria de la construcción.',
      imagen1: 'https://chilegbc.cl/assets/images/noticias/e9d50d_Originales_Premios_Socio_Destacado-01.png',
      imagen2: 'https://contactoconstruccion.com/wp-content/uploads/2022/03/2-Cualidades-del-Cemento.jpeg',
    },
  ];

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/1e/cb/99/1ecb99e0d5941b0da6e272de1c9cde04.jpg',
      }}
      style={styles.nextScreenBackgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.nextScreenScrollContainer}>
        <View style={styles.nextScreenContainer}>
          <Text style={styles.nextScreenTitleContainer}>
            <Text style={styles.nextScreenTitle}>Noticias Corporativas</Text>
          </Text>
          {noticias.map((noticia) => (
            <View key={noticia.id} style={styles.nextScreenNewsCard}>
              <View style={styles.nextScreenBackground}>
                <Image source={{ uri: noticia.imagen1 }} style={styles.nextScreenImageTopLeft} />
                <Image source={{ uri: noticia.imagen2 }} style={styles.nextScreenImageBottomRight} />
              </View>
              <View style={styles.nextScreenContent}>
                <Text style={styles.nextScreenNewsTitle}>{noticia.titulo}</Text>
                <Text style={styles.nextScreenNewsDate}>{noticia.fecha}</Text>
                <Text style={styles.nextScreenNewsText}>{noticia.texto}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <CustomFooter
        showLeft={true}
        showRight={true}
        onLeftPress={() => navigation.navigate('Glossary')}
        onRightPress={() => navigation.navigate('FourthScreen')}
      />
    </ImageBackground>
  );
};

export default NextScreen;
