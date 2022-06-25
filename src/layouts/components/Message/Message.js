import { memo, useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

import styles from './Message.module.scss';

import Button from '~/components/Button';
import QuantityNotification from '~/components/QuantityNotification';
import { css } from '~/utils';
import { IconMessage } from '~/components/Icons';
import MessagePopper from './MessagePopper';

const cx = classnames.bind(styles);

const Message = ({ className, listBtnOption, listUserMessage }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleToggleMessage = useCallback(() => setShowMessage(!showMessage), [showMessage]);
  const handleCloseMessage = useCallback(() => setShowMessage(false), []);

  const renderMessagePopper = (attr) => (
    <MessagePopper attr={attr} listBtnOption={listBtnOption} listUserMessage={listUserMessage} />
  );

  return (
    <div className={className}>
      <HeadlessTippy
        visible={showMessage}
        interactive
        onClickOutside={handleCloseMessage}
        render={renderMessagePopper}
      >
        <Tippy delay={[500, 100]} content="Messenger">
          <Button
            hoverOverlayHigh
            circle
            size={[40]}
            onClick={handleToggleMessage}
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
  listBtnOption: PropTypes.array,
  listUserMessage: PropTypes.array,
};

export default memo(Message);
