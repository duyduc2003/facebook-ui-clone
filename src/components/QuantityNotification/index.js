import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './QuantityNotification.module.scss';

const cx = classnames.bind(styles);

const p = ['top', 'left', 'bottom', 'right'];

const QuantityNotification = ({
  children,
  quantity,
  dot = false,
  style,
  position = [null, null, null, null],
}) => {
  const _position = {};

  position.forEach((pos, index) => {
    if (pos !== null) {
      _position[p[index]] = pos;
    }
  });

  const styles = {
    ..._position,
    ...style,
  };

  return (
    <div className={cx('wrapper')}>
      {children}
      {!dot && quantity !== 0 && quantity > 0 && (
        <div style={styles} className={cx('inner')}>
          <span>{dot ? '' : quantity && quantity >= 100 ? '9+' : quantity}</span>
        </div>
      )}
      {dot && <span style={styles} className={cx('inner', 'dot')}></span>}
    </div>
  );
};

export default QuantityNotification;

QuantityNotification.propTypes = {
  children: PropTypes.node.isRequired,
  quantity: PropTypes.number,
  dot: PropTypes.bool,
  style: PropTypes.object,
  position: PropTypes.array,
};
