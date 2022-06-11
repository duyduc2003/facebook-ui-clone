import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';

import configs from '~/configs';
import {
  IconFacebook,
  IconFriend,
  IconGroup,
  IconHome,
  IconMoreOption,
  IconNotification,
  IconWatch,
} from '~/components/Icons';
import Image from '~/components/Image';
import QuantityNotification from '~/components/QuantityNotification';
import Button from '~/components/Button';
import Search from '../Search';
import { css } from '~/utils';
import Menu from '../Menu';
import Message from '../Message';

const cx = classnames.bind(styles);

const nav_middle = [
  { title: 'Trang chủ', icon: IconHome, to: configs.routes.HOME, notification: 0 },
  { title: 'Watch', icon: IconWatch, to: configs.routes.WATCH, notification: 98 },
  { title: 'Bạn bè', icon: IconFriend, to: configs.routes.FRIEND, notification: 12 },
  { title: 'Nhóm', icon: IconGroup, to: configs.routes.GROUP, notification: 1 },
];

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header-left')}>
          <Link to={configs.routes.HOME}>
            <IconFacebook />
          </Link>
          <Search />
        </div>
        <div className={cx('header-right')}>
          <Button size={[100, 36]} hoverOverlay to={'/user/me'} className={cx('user')}>
            <Image
              src="https://video.fsgn13-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=cp0_dst-jpg_s80x80&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=E-EBARCVM4sAX_rC2l3&_nc_ht=video.fsgn13-1.fna&oh=00_AT-DiiwNjxf0-WlsDtsD1HEbfVivSPpaokwCyqKJ5gJEOw&oe=629C2746"
              alt="duy duc"
              className={cx('avatar-user')}
              height={28}
              width={28}
              borderRadius="50%"
              objectFit="cover"
            />
            <span className={cx('username')}>Duy Đức</span>
          </Button>
          <div className={cx('option')}>
            <Menu className={cx('btn-option')} />
            <Message className={cx('btn-option')} />
            <Tippy delay={[500, 100]} content={'Thông báo'}>
              <Button hoverOverlayHigh className={cx('btn-option')} circle size={[40]}>
                <QuantityNotification position={[-16, css.calc('50% + 3px')]} quantity={32}>
                  <IconNotification />
                </QuantityNotification>
              </Button>
            </Tippy>
            <Tippy delay={[500, 100]} content="Trang cá nhân của bạn">
              <Button hoverOverlayHigh className={cx('btn-option')} circle size={[40]}>
                <QuantityNotification position={[-10, css.calc('50% + 8px')]} dot>
                  <IconMoreOption />
                </QuantityNotification>
              </Button>
            </Tippy>
          </div>
        </div>
      </div>
      <div className={cx('header-middle-wrap')}>
        <div className={cx('middle-inner')}>
          {nav_middle.map(({ icon: Icon, notification, to, title }, index) => (
            <Tippy delay={[500, 100]} key={index} content={title}>
              <Button size={[111, 48]} hoverOverlay to={to}>
                <QuantityNotification
                  position={[-6, css.calc('50% + 4px')]}
                  quantity={notification}
                >
                  <Icon />
                </QuantityNotification>
              </Button>
            </Tippy>
          ))}
        </div>
      </div>
      <div className={cx('border-header')}></div>
    </header>
  );
};

export default Header;
