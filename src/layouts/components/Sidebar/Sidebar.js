import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.scss';

const cx = classnames.bind(styles);

const Sidebar = ({ children, transparent = false, placement = 'left' }) => {
  const classes = cx('wrapper', {
    transparent,
    left: placement === 'left',
    right: placement === 'right',
  });

  return (
    <div className={classes}>
      <div className={cx('inner')}>{children}</div>
      {!transparent && placement === 'left' && <div className={cx('border-left')}></div>}
    </div>
  );
};
Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
  placement: PropTypes.string,
};
export default Sidebar;
