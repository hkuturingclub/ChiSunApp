import { View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

const Spacer = ({ size }) => (
  <View style={{ flex: 1, height: size }} />
);

Spacer.propTypes = {
  size: PropTypes.number,
};

Spacer.defaultProps = {
  size: 20,
};

export default Spacer;
