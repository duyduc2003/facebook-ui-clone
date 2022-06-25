import { memo, useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';

import Popper from '~/components/Popper';
import { IconMenu } from '~/components/Icons';
import Button from '~/components/Button';
import MenuItem from './MenuItem';

const cx = classnames.bind(styles);

const Menu = ({ className, menu }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClosePopper = useCallback(() => setShowMenu(false), []);
  const handleTogglePopper = useCallback(() => setShowMenu(!showMenu), [showMenu]);
  const renderMenuPopper = (attr) => (
    <Popper {...attr} className={cx('popper-menu')}>
      <header className={cx('header-menu')}>
        <h2 className={cx('heading-menu')}>Tạo</h2>
      </header>
      <div className={cx('body-menu')}>
        {menu.map(({ icon, title, separation, to }, i) => (
          <div key={i}>
            {separation && <div className={cx('separation')}></div>}
            <MenuItem icon={icon} title={title} to={to} onClick={handleClosePopper} />
          </div>
        ))}
      </div>
    </Popper>
  );

  return (
    <div className={className}>
      <HeadlessTippy
        visible={showMenu}
        interactive
        placement="bottom"
        onClickOutside={handleClosePopper}
        render={renderMenuPopper}
      >
        <Tippy delay={[500, 100]} content="Menu">
          <Button
            circle
            size={[40]}
            onClick={handleTogglePopper}
            hoverOverlayHigh
            active={showMenu}
          >
            <IconMenu />
          </Button>
        </Tippy>
      </HeadlessTippy>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default memo(Menu);
