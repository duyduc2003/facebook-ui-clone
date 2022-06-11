import { useState } from 'react';
import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

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
import AccountMessage from '~/components/AccountMessage';

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
  {
    lastName: 'Thanh',
    firstName: 'Ngân',
    nickname: 'congchuacuatui',
    friendImage:
      'https://video.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/286554563_1210320426380325_7976798939679321202_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fnisNcaIEJ8AX8-lD1Y&_nc_ad=z-m&_nc_cid=0&_nc_ht=video.fsgn8-2.fna&oh=00_AT-v0DOVIIOtQHJMdpk9jUV2g6CCm5lXwJQgQLbq2hadxw&oe=62A8DD7D',
    action: 'sended',
    message: 'Ngủ ngonn <3 <3',
  },
  {
    lastName: 'Hồng',
    firstName: 'Diễm',
    nickname: 'Cô bé thỉu năng',
    friendImage:
      'https://video.xx.fbcdn.net/v/t39.30808-1/283539103_3243798072529209_2020635197101786357_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=oJs9-cNJnD0AX_Jn1_D&_nc_ad=z-m&_nc_cid=0&_nc_ht=video.xx&oh=00_AT_WReD6SuiWwv5dx_ZMEgPJPGRVgmhNQCUpOIACmKmwXQ&oe=62A87D89',
    action: 'unread',
    message: 'Ngủ ngonn <3 <3',
  },
  {
    lastName: 'Nguyễn Thành',
    firstName: 'Trung',
    nickname: '',
    friendImage:
      'https://video.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/278874584_517375000006167_3086948667651625067_n.jpg?stp=dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=h7S70KysEYoAX-m9Dx2&_nc_ad=z-m&_nc_cid=0&_nc_ht=video.fsgn4-1.fna&oh=00_AT-PlDhFtcgNUw7fXyz1W4CNPdjixPVqZygumk6GPO0U1Q&oe=62A91EE1',
    action: 'unread',
    message: 'Ngủ ngonn <3 <3',
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
              {listUserMessage.map(
                ({ action, message, friendImage, nickname, firstName, lastName }, index) => (
                  <AccountMessage
                    key={index}
                    action={action}
                    message={message}
                    friendImage={friendImage}
                    nickname={nickname}
                    firstName={firstName}
                    lastName={lastName}
                  />
                )
              )}
            </div>
          </Popper>
        )}
      >
        <Tippy delay={[500, 100]} content="Messenger">
          <Button
            hoverOverlayHigh
            circle
            size={[40]}
            onClick={(e) => setShowMessage(!showMessage)}
            hoverOverlayPrimary={showMessage}
          >
            <QuantityNotification position={[-16, css.calc('50% + 3px')]} quantity={10}>
              <IconMessage color={showMessage && css.color.iconActive} />
            </QuantityNotification>
          </Button>
        </Tippy>
      </HeadlessTippy>
    </div>
  );
};

export default Message;
