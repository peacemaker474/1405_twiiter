'use client';

import { useRouter } from 'next/navigation';

import { ComponentPropsWithRef, MouseEventHandler, ReactNode, useCallback, useRef } from 'react';

import styles from './modal.module.scss';

type Props = ComponentPropsWithRef<'dialog'> & {
  children: ReactNode;
};

export const Modal = ({ children, className }: Props) => {
  const router = useRouter();
  const overlay = useRef<HTMLDialogElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const handleOnDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const handleCloseModal: MouseEventHandler = useCallback(
    (event) => {
      if (event.target === overlay.current || event.target === container.current) {
        if (handleOnDismiss) handleOnDismiss();
      }
    },
    [handleOnDismiss, overlay, container],
  );

  return (
    <dialog className={styles.overlay} ref={overlay} onClick={handleCloseModal}>
      <div className={`${styles.container} ${className}`} ref={container}>
        {children}
      </div>
    </dialog>
  );
};
