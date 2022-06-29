import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { memo } from 'react';

import styles from './Navigation.module.scss';

const cx = classnames.bind(styles);

const Navigation = ({ children }) => {
  return <nav className={cx('wrapper')}>{children}</nav>;
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Navigation);
