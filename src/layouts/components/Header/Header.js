import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import { useCallback } from 'react';
import { v4 as uuid4 } from 'uuid';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';

import configs from '~/configs';
import {
  Icon3Dot,
  IconFacebook,
  IconFlag,
  IconFriend,
  IconFriendActive,
  IconGroup,
  IconGroupActive,
  IconGroupFull,
  IconHome,
  IconHomeActive,
  IconNews,
  IconOpenMessage,
  IconPost,
  IconPostsInGroup,
  IconWatch,
  IconWatchActive,
  IconWriteMessage,
} from '~/components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Search from '../Search';
import Menu from '../Menu';
import Message from '../Message';
import Notification from '../Notification';
import MoreOption from '../MoreOption';
import Navigation, { NavItem } from '../Navigation';

const cx = classnames.bind(styles);

const nav_middle = [
  {
    title: 'Trang chủ',
    icon: <IconHome />,
    iconActive: <IconHomeActive />,
    to: configs.routes.HOME,
    notification: 0,
  },
  {
    title: 'Watch',
    icon: <IconWatch />,
    iconActive: <IconWatchActive />,
    to: configs.routes.WATCH,
    notification: 98,
  },
  {
    title: 'Bạn bè',
    icon: <IconFriend />,
    iconActive: <IconFriendActive />,
    to: configs.routes.FRIEND,
    notification: 12,
  },
  {
    title: 'Nhóm',
    icon: <IconGroup />,
    iconActive: <IconGroupActive />,
    to: configs.routes.GROUP,
    notification: 1,
  },
];

const menu_items = [
  { title: 'Đăng', icon: <IconPost />, separation: false },
  { title: 'Bài viết trong nhóm', icon: <IconPostsInGroup />, separation: false },
  { title: 'Tin', icon: <IconNews />, separation: false },
  { title: 'Nhóm', icon: <IconGroupFull />, separation: true, to: configs.routes.GROUP },
  { title: 'Trang', icon: <IconFlag />, separation: false, to: configs.routes.PAGE_ },
];

const listBtnOptionMess = [
  { title: 'Tùy chọn', icon: <Icon3Dot /> },
  { title: 'Xem tất cả trong messenger', icon: <IconOpenMessage />, to: configs.routes.MESSENGER },
  { title: 'Tin nhắn mới', icon: <IconWriteMessage /> },
];

const user = {
  id: uuid4(),
  image:
    'https://video.fsgn1-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NRDNCEBYhbMAX8uk5lG&_nc_ht=video.fsgn1-1.fna&oh=00_AT8nWmEhbW--GbUo7bIKAlcBKHpgcbLHz6Nj3KW4oIyxkg&oe=62B9D106',
  lastName: 'Đặng',
  firstName: 'Duy Đức',
};

const listUserMessage = [
  {
    lastName: 'Duy',
    firstName: 'Đức',
    nickname: 'dangduyducdeptrainhatvutru',
    srcImageUser:
      'https://video.fsgn1-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NRDNCEBYhbMAX8uk5lG&_nc_ht=video.fsgn1-1.fna&oh=00_AT8nWmEhbW--GbUo7bIKAlcBKHpgcbLHz6Nj3KW4oIyxkg&oe=62B9D106',
    action: 'unread',
    message: 'haha',
  },
];

const Header = () => {
  const handleMoreOptionChange = useCallback((option) => {
    console.log(option);
  }, []);

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
          <Button size={[100, 36]} hoverOverlay to={`/user/${user.id}`} className={cx('user')}>
            <Image
              src={user.image}
              alt={user.id}
              className={cx('avatar-user')}
              height={28}
              width={28}
              borderRadius="50%"
              objectFit="cover"
            />
            <span className={cx('username')}>{user.firstName}</span>
          </Button>
          <div className={cx('option')}>
            <Menu className={cx('btn-option')} menu={menu_items} />
            <Message
              className={cx('btn-option')}
              listUserMessage={listUserMessage}
              listBtnOption={listBtnOptionMess}
            />
            <Notification className={cx('btn-option')} />
            <MoreOption className={cx('btn-option')} onchange={handleMoreOptionChange} />
          </div>
        </div>
      </div>
      <div className={cx('header-middle-wrap')}>
        <Navigation>
          {nav_middle.map(({ icon, notification, to, title, iconActive }, index) => (
            <NavItem
              key={index}
              icon={icon}
              iconActive={iconActive}
              notification={notification}
              navTo={to}
              title={title}
            />
          ))}
        </Navigation>
      </div>
      <div className={cx('border-header')}></div>
    </header>
  );
};

export default Header;
