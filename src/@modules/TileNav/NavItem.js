import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { pure, compose } from 'recompose';
import { Link } from '@modules/NativeWebRouter';
import { H6 } from '@primitives/typography';
import styled from '@primitives/styled';
import LinearGradient from '@primitives/LinearGradient';
import NavItemImage from './NavItemImage';

const CardView = styled(({ theme }) => ({
  borderRadius: theme.cardBorderRadius,
  overflow: 'hidden',
}))(View);

const NavItemText = styled(({ theme }) => ({
  position: 'absolute',
  bottom: theme.baseUnit,
  left: theme.baseUnit,
  backgroundColor: 'transparent',
  color: theme.lightPrimaryColor,
}))(H6);

const enhance = compose(
  pure,
);

const NavItem = enhance(({
  image,
  link,
  text,
}) => (
  <Link to={link}>
    <CardView>
      <NavItemImage source={{ uri: image }}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
          locations={[0.3, 1]}
          style={StyleSheet.absoluteFill}
        >
          <NavItemText>{text}</NavItemText>
        </LinearGradient>
      </NavItemImage>
    </CardView>
  </Link>
));

NavItem.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
