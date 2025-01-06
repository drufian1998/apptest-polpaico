import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#ADD8E6',
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerContent: {
    flex: 0.55,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 11,
    color: '#000',
    textAlign: 'center',
    marginTop: 3,
  },
  linksContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  link: {
    fontSize: 11,
    color: '#007BFF',
    marginHorizontal: 5,
    textDecorationLine: 'underline',
  },
  divider: {
    fontSize: 11,
    color: '#000',
    marginHorizontal: 5,
  },
});
