import { useRef, useState } from 'react';
import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

import styles from './Message.module.scss';

import Button from '~/components/Button';
import QuantityNotification from '~/components/QuantityNotification';
import { css } from '~/utils';
import {
  Icon3Dot,
  IconMessage,
  IconOpenMessage,
  IconSearch,
  IconWriteMessage,
} from '~/components/Icons';
import Popper from '~/components/Popper';
import configs from '~/configs';
import AccountItem from '~/components/AccountItem';

const cx = classnames.bind(styles);

const listBtnOptionMess = [
  { title: 'Tùy chọn', icon: Icon3Dot },
  { title: 'Xem tất cả trong messenger', icon: IconOpenMessage, to: configs.routes.MESSENGER },
  { title: 'Tin nhắn mới', icon: IconWriteMessage },
];

const listUserMessage = [
  {
    lastName: 'Duy',
    firstName: 'Đức',
    nickname: 'Đực',
    friendImage:
      'https://video.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=cp0_dst-jpg_s80x80&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=71tPowidIMMAX9A-lgJ&_nc_ht=video.fsgn3-1.fna&oh=00_AT-d9uszlw6fPI_FnAC4PxwtGPltx0W-DmBKcgs0rBh9lQ&oe=62A804C6',
    action: 'hidden',
    message: 'haha',
  },
];

const Message = ({ className }) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className={className}>
      <HeadlessTippy
        visible={showMessage}
        interactive
        onClickOutside={(e) => setShowMessage(false)}
        render={(attr) => (
          <Popper {...attr} className={cx('message-popper')}>
            <header className={cx('header-message')}>
              <h3 className={cx('heading')}>Chat</h3>
              <div className={cx('message-option')}>
                {listBtnOptionMess.map(({ icon: Icon, title, to }, index) => {
                  return (
                    <Tippy key={index} delay={[500, 100]} content={title} placement="bottom-end">
                      <Button
                        size={[35]}
                        hoverOverlay
                        circle
                        className={cx('btn-option-message')}
                        onClick={(e) => console.log({ Icon, title })}
                        to={to}
                      >
                        <Icon className={cx('icon')} />
                      </Button>
                    </Tippy>
                  );
                })}
              </div>
            </header>
            <div className={cx('search-message-wrapper')}>
              <div className={cx('search-message-inner')}>
                <label htmlFor="search-message">
                  <IconSearch />
                </label>
                <input id="search-message" type="text" placeholder="Tìm kiếm trên Messenger" />
              </div>
            </div>
            <div className={cx('body-message')}>
              {listUserMessage.length > 0 ? (
                listUserMessage.map(
                  ({ action, message, friendImage, nickname, firstName, lastName }, index) => (
                    <AccountItem
                      key={index}
                      action={action}
                      message={message}
                      friendImage={friendImage}
                      nickname={nickname}
                      firstName={firstName}
                      lastName={lastName}
                    />
                  )
                )
              ) : (
                <span>Bạn không có tin nhắn</span>
              )}
            </div>
            <footer className={cx('footer-message')}>
              <Link to={configs.routes.MESSENGER} className={cx('inner')}>
                Xem tất cả trong Messenger
              </Link>
            </footer>
          </Popper>
        )}
      >
        <Tippy delay={[500, 100]} content="Messenger">
          <Button
            hoverOverlayHigh
            circle
            size={[40]}
            onClick={(e) => setShowMessage(!showMessage)}
            active={showMessage}
          >
            <QuantityNotification position={[-16, css.calc('50% + 3px')]} quantity={10}>
              <IconMessage />
            </QuantityNotification>
          </Button>
        </Tippy>
      </HeadlessTippy>
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
};

export default Message;
