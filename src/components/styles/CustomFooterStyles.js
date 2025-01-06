import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ADD8E6',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    fontSize: 20,
    color: '#000',
  },
  footerSpacer: {
    flex: 1,
  },
});
