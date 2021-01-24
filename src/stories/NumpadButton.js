import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import './numpadButton.css';

/**
 * Primary UI component for user interaction
 */
export const NumpadButton = ({ color, size, label, variant, shape, ...props }) => {
  return (
    <Button
      type="button"
      color={color}
      variant={variant}
      size={size}
      {...props}
      className={[`storybook-button--${shape}`].join(' ')}
      >
      {label}
    </Button>
  );
};

NumpadButton.propTypes = {
  /**
   * Color of the button
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Shape of the button
   */
  shape: PropTypes.oneOf(['square', 'circle', 'default']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Variant of a button
   */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

NumpadButton.defaultProps = {
  color: 'primary',
  size: 'medium',
  onClick: undefined,
  variant: 'outlined',
  shape: 'default'
};
