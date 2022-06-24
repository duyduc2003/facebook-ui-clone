import { useState } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

import images from '~/assets/Images';

const cx = classnames.bind(styles);

const Image = ({
  src,
  alt,
  className,
  fallback = images.noImage,
  style = {},
  height,
  width,
  borderRadius,
  objectFit,
  ...props
}) => {
  const [srcImage, setSrcImage] = useState(src);

  return (
    <img
      {...props}
      className={className}
      src={srcImage}
      alt={alt}
      style={{ ...style, height, width, borderRadius, objectFit }}
      onError={(e) => setSrcImage(fallback)}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
  style: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderRadius: PropTypes.PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  objectFit: PropTypes.PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Image;
