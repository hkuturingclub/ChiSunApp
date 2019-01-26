import { ActivityIndicator, View } from 'react-native';
import Colors from '../native-base-theme/variables/commonColor';
import React from 'react';

const About = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color={Colors.brandPrimary} />
  </View>
);

export default About;
