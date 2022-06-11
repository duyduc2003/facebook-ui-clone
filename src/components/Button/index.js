import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes, { any, func, number, oneOfType, string } from 'prop-types';

import styles from './Button.module.scss';
import React from 'react';

const cx = classnames.bind(styles);

const Button = React.forwardRef(
  (
    {
      hoverOverlay = false,
      hoverOverlayPrimary = false,
      hoverOverlayHigh = false,
      circle = false,
      size = [],
      to,
      href,
      className,
      style = {},
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const component = { Current: 'button' };

    const _props = { onClick, ...props };

    if (to) {
      _props.to = to;
      component.Current = Link;
    } else if (href) {
      _props.href = href;
      component.Current = 'a';
    }

    let height_width = {};

    if (size && size.length > 0 && size.length <= 2) {
      if (size.length === 1) {
        height_width.height = size[0];
        height_width.width = size[0];
      } else if (size.length === 2) {
        height_width.width = size[0];
        height_width.height = size[1];
      }
    } else if (size && size.length > 2) {
      throw new Error('Error Buton component: size must be have 2 item');
    }

    let _style = {
      ...height_width,
      ...style,
    };

    const classes = cx('wrapper', {
      [className]: className,
      hoverOverlay,
      hoverOverlayHigh,
      hoverOverlayPrimary,
      circle,
    });

    return (
      <component.Current ref={ref} {..._props} className={classes} style={_style}>
        {children}
      </component.Current>
    );
  }
);

Button.propTypes = {
  hoverOverlay: PropTypes.bool,
  circle: PropTypes.bool,
  size: PropTypes.array,
  to: string,
  href: string,
  className: oneOfType([string, number]),
  style: PropTypes.object,
  onClick: func,
  children: PropTypes.node.isRequired,
};

export default Button;
