import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles/CustomFooterStyles';

const CustomFooter = ({ onLeftPress, onRightPress, showLeft, showRight }) => (
  <View style={styles.footer}>
    {showLeft && (
      <TouchableOpacity onPress={onLeftPress} style={styles.footerButton}>
        <Text style={styles.footerButtonText}>←</Text>
      </TouchableOpacity>
    )}
    <View style={styles.footerSpacer} />
    {showRight && (
      <TouchableOpacity onPress={onRightPress} style={styles.footerButton}>
        <Text style={styles.footerButtonText}>→</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default CustomFooter;
