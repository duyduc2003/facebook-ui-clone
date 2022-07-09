import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import styles from './MainLayout.module.scss';

const cx = classnames.bind(styles);

const MainLayout = ({ children, sidebarTransparent }) => {
  return (
    <div className={cx('wrapper')} style={{ height: 10000 }}>
      <Header />
      <div className={cx('inner')}>
        <Sidebar transparent={sidebarTransparent}>
          <h1>Sidebar left</h1>
        </Sidebar>
        <div className={cx('content')}>{children}</div>
        <Sidebar transparent={sidebarTransparent} placement="right">
          <h1>Sidebar right</h1>
        </Sidebar>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
};

export default MainLayout;
