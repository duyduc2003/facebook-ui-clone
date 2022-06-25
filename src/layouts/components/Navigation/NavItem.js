import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import styles from './Navigation.module.scss';
import Button from '~/components/Button';
import QuantityNotification from '~/components/QuantityNotification';
import { css } from '~/utils';
import { memo, useCallback } from 'react';

const cx = classnames.bind(styles);

const NavItem = ({ title, notification, navTo, icon, iconActive }) => {
  const handleClassNameActive = useCallback(
    ({ isActive, classes }) => cx(classes, { active: isActive }),
    []
  );

  return (
    <Tippy delay={[500, 100]} content={title}>
      <Button size={[111, 48]} hoverOverlay navTo={navTo} className={handleClassNameActive}>
        <QuantityNotification position={[-6, css.calc('50% + 4px')]} quantity={notification}>
          <span className={cx('icon', 'icon-default')}>{icon}</span>
          <span className={cx('icon', 'icon-active')}>{iconActive}</span>
        </QuantityNotification>
        <div className={cx('underline')}></div>
      </Button>
    </Tippy>
  );
};

NavItem.propTypes = {
  title: PropTypes.string,
  notification: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  navTo: PropTypes.string,
  icon: PropTypes.node.isRequired,
  iconActive: PropTypes.node.isRequired,
};

export default memo(NavItem);
