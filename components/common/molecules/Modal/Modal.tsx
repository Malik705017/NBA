import { FC } from 'react';
import classnames from 'classnames';

import { useModal } from '../../../../models/modal';

import Portal from '../../atoms/Portal';
import Backdrop from '../../atoms/Backdrop';
import Icon from '../../atoms/Icon';

import styles from './Modal.module.scss';

type ModalProps = {
  className?: string;
};

const Modal: FC<ModalProps> = ({ children: ModalContent, className }) => {
  const [, { closeModal }] = useModal();
  return (
    <>
      <Portal>
        <Backdrop onClick={() => closeModal()} />
      </Portal>
      <Portal>
        <div className={classnames(styles.modal, className)}>
          <Icon className={styles.icon} src="/icons/close.icon.png" alt="closeIcon" onClick={() => closeModal()} />
          {ModalContent}
        </div>
      </Portal>
    </>
  );
};

export default Modal;
