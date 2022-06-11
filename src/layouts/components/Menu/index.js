import { useState } from 'react';
import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import styles from './Menu.module.scss';

import Popper from '~/components/Popper';
import {
  IconFlag,
  IconGroupFull,
  IconMenu,
  IconNews,
  IconPost,
  IconPostsInGroup,
} from '~/components/Icons';
import Button from '~/components/Button';
import { css } from '~/utils';
import configs from '~/configs';

const cx = classnames.bind(styles);

const menu_items = [
  { title: 'Đăng', icon: IconPost, separation: false },
  { title: 'Bài viết trong nhóm', icon: IconPostsInGroup, separation: false },
  { title: 'Tin', icon: IconNews, separation: false },
  { title: 'Nhóm', icon: IconGroupFull, separation: true, to: configs.routes.GROUP },
  { title: 'Trang', icon: IconFlag, separation: false, to: configs.routes.PAGE_ },
];

const Menu = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={className}>
      <HeadlessTippy
        visible={showMenu}
        interactive
        placement="bottom"
        onClickOutside={(e) => setShowMenu(false)}
        render={(attr) => (
          <Popper {...attr} className={cx('popper-menu')}>
            <header className={cx('header-menu')}>
              <h2 className={cx('heading-menu')}>Tạo</h2>
            </header>
            <div className={cx('body-menu')}>
              {menu_items.map(({ icon: Icon, title, separation, to }, i) => (
                <div key={i}>
                  {separation && <div className={cx('separation')}></div>}
                  <Button
                    size={[184, 48]}
                    hoverOverlay
                    className={cx('btn-menu-items')}
                    onClick={(e) => setShowMenu(false)}
                    to={to}
                  >
                    <div className={cx('icon-menu')}>
                      <Icon />
                    </div>
                    <h5 className={cx('title')}>{title}</h5>
                  </Button>
                </div>
              ))}
            </div>
          </Popper>
        )}
      >
        <Tippy delay={[500, 100]} content="Menu">
          <Button
            circle
            size={[40]}
            onClick={(e) => setShowMenu(!showMenu)}
            hoverOverlayPrimary={showMenu}
            hoverOverlayHigh
          >
            <IconMenu color={showMenu && css.color.iconActive} />
          </Button>
        </Tippy>
      </HeadlessTippy>
    </div>
  );
};

export default Menu;
