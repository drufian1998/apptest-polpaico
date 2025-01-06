import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  carouselBackground: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  carouselContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 20,
  },
  carouselImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  carouselAddress: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  carouselDescription: {
    fontSize: 12,
    color: '#333',
    textAlign: 'justify',
    marginTop: 10,
  },
  expandText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
  },
});
