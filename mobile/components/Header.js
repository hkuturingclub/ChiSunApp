import { H1, Text } from 'native-base';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import Spacer from './Spacer';

const Header = ({ title, content, align}) => (
  <View>
    <Spacer size={15} />
    <H1 style={{textAlign: align}}>
      {title}
    </H1>
    {!!content && (
      <View>
        <Spacer size={10} />
        <Text>
          {content}
        </Text>
      </View>
    )}
    <Spacer size={15} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Header.defaultProps = {
  title: 'Missing title',
  content: '',
  align: 'left'
};

export default Header;
