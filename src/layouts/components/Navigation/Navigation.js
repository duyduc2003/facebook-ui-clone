import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Navigation.module.scss';

const cx = classnames.bind(styles);

const Navigation = ({ children }) => {
  return <div className={cx('wrapper')}>{children}</div>;
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
