import { memo, useCallback, useState } from 'react';
import className from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';

import Button from '~/components/Button';
import { IconNotification, IconOpenNotification } from '~/components/Icons';
import QuantityNotification from '~/components/QuantityNotification';
import { css } from '~/utils';
import styles from './Notification.module.scss';
import Popper from '~/components/Popper';
import configs from '~/configs';
import AccountItem from '~/components/AccountItem';

const cx = className.bind(styles);

const Notification = ({ className }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [btnSelectModeAllActive, setBtnSelectModeAllActive] = useState(true);

  const handleCloseNotification = useCallback(() => setShowNotification(false), []);
  const handleBtnActive = useCallback(() => setBtnSelectModeAllActive(true), []);
  const handleBtnNoActive = useCallback(() => setBtnSelectModeAllActive(false), []);
  const handleToggleNotification = useCallback(
    () => setShowNotification(!showNotification),
    [showNotification]
  );

  const renderPopper = (attr) => (
    <Popper {...attr} className={cx('popper-notification')}>
      <header className={cx('header-popper')}>
        <h1>Thông báo</h1>
        <div className={cx('icon-header')}>
          <Tippy content="Mở thông báo" placement="bottom-end" delay={[500, 100]}>
            <Button
              hoverOverlay
              size={[35]}
              className={cx('btn-header')}
              to={configs.routes.NOTIFICATION}
            >
              <IconOpenNotification className={cx('icon')} />
            </Button>
          </Tippy>
        </div>
      </header>
      <div className={cx('select-mode')}>
        <Button
          hoverOverlay={!btnSelectModeAllActive}
          active={btnSelectModeAllActive}
          className={cx('btn-select')}
          onClick={handleBtnActive}
        >
          Tất cả
        </Button>
        <Button
          hoverOverlay={btnSelectModeAllActive}
          active={!btnSelectModeAllActive}
          className={cx('btn-select')}
          onClick={handleBtnNoActive}
        >
          Chưa đọc
        </Button>
      </div>
      <div className={cx('body-popper')}>
        <AccountItem
          srcImageUser={
            'https://video.fsgn1-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NRDNCEBYhbMAX8uk5lG&_nc_ht=video.fsgn1-1.fna&oh=00_AT8nWmEhbW--GbUo7bIKAlcBKHpgcbLHz6Nj3KW4oIyxkg&oe=62B9D106'
          }
          message="xin chao tat ca moi nguoi xin chao tat ca moi nguoi xin chao tat ca moi nguoi xin chao tat ca moi nguoi"
          mode="notification"
          action="hidden"
        />
        <AccountItem
          srcImageUser={
            'https://video.fsgn1-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NRDNCEBYhbMAX8uk5lG&_nc_ht=video.fsgn1-1.fna&oh=00_AT8nWmEhbW--GbUo7bIKAlcBKHpgcbLHz6Nj3KW4oIyxkg&oe=62B9D106'
          }
          message="xin chao tat ca moi nguoi xin chao tat ca moi nguoi xin chao tat ca moi nguoi xin chao tat ca moi nguoi"
          mode="notification"
          action="unread"
        />
      </div>
    </Popper>
  );

  return (
    <div className={className}>
      <HeadlessTippy
        visible={showNotification}
        interactive
        onClickOutside={handleCloseNotification}
        render={renderPopper}
      >
        <Tippy delay={[500, 100]} content={'Thông báo'}>
          <Button
            hoverOverlayHigh
            circle
            size={[40]}
            onClick={handleToggleNotification}
            active={showNotification}
          >
            <QuantityNotification position={[-16, css.calc('50% + 3px')]} quantity={32}>
              <IconNotification />
            </QuantityNotification>
          </Button>
        </Tippy>
      </HeadlessTippy>
    </div>
  );
};

Notification.propTypes = {
  className: PropTypes.string,
};
export default memo(Notification);
