import { useState } from 'react';
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

  return (
    <div className={className}>
      <HeadlessTippy
        visible={showNotification}
        interactive
        onClickOutside={() => setShowNotification(false)}
        render={(attr) => (
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
                onClick={(e) => setBtnSelectModeAllActive(true)}
              >
                Tất cả
              </Button>
              <Button
                hoverOverlay={btnSelectModeAllActive}
                active={!btnSelectModeAllActive}
                className={cx('btn-select')}
                onClick={(e) => setBtnSelectModeAllActive(false)}
              >
                Chưa đọc
              </Button>
            </div>
            <div className={cx('body-popper')}>
              <AccountItem
                friendImage={
                  'https://video.fsgn1-1.fna.fbcdn.net/v/t39.30808-1/286896940_171198005353029_4720278242128188090_n.jpg?stp=c716.549.577.577a_dst-jpg_s130x130&_nc_cat=109&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=WOa8TOIs9W8AX_0Lwhx&tn=jqMT3zw6gVmyGtOZ&_nc_ht=video.fsgn1-1.fna&oh=00_AT_d80UELgtEpiG8MXAWvqJlTdI-SD27ptpHgHnIsgmq4w&oe=62AB6B5C'
                }
                message="xin chao tat ca moi nguoi xin chao tat ca moi nguoi xin chao tat ca moi nguoi xin chao tat ca moi nguoi"
                mode="notification"
              />
            </div>
          </Popper>
        )}
      >
        <Tippy delay={[500, 100]} content={'Thông báo'}>
          <Button
            hoverOverlayHigh
            circle
            size={[40]}
            onClick={() => setShowNotification(!showNotification)}
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
export default Notification;
