import classnames from 'classnames/bind';

import Header from '../components/Header';
import styles from './HeaderLayout.module.scss';

const cx = classnames.bind(styles);

const HeaderLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('inner')}>{children}</div>
    </div>
  );
};

export default HeaderLayout;
