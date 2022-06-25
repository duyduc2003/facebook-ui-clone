import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { memo } from 'react';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

const MenuItem = ({ onClick, to, icon, title }) => {
  return (
    <Button
      size={[184, 48]}
      hoverOverlay
      className={cx('btn-menu-items')}
      onClick={onClick}
      to={to}
    >
      <div className={cx('icon-menu')}>{icon}</div>
      <h5 className={cx('title')}>{title}</h5>
    </Button>
  );
};

MenuItem.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(MenuItem);
