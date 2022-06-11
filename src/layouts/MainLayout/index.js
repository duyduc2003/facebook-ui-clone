import classnames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import styles from './MainLayout.module.scss';

const cx = classnames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('inner')}>
        <Sidebar />
        {children}
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
