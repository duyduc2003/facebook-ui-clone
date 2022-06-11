import classnames from 'classnames/bind';
import { node, string } from 'prop-types';

import styles from './Popper.module.scss';

const cx = classnames.bind(styles);

const Popper = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cx('wrapper', { [className]: className })}>
      {children}
    </div>
  );
};

Popper.propTypes = {
  children: node.isRequired,
  className: string,
};

export default Popper;
