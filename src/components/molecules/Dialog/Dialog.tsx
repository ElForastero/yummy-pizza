import React, { Fragment } from 'react';
import { config, animated, useTransition } from 'react-spring';
import {
  DialogOverlay,
  DialogContent,
  DialogProps as ReachDialogProps,
} from '@reach/dialog';
import { Control } from 'src/components/atoms/Control';
import { ReactComponent as CrossIcon } from 'src/assets/icons/x-circle.svg';
import s from './Dialog.module.css';

export type DialogProps = ReachDialogProps & {
  buttons?: JSX.Element;
  label: string;
};

const AnimatedOverlay = animated(DialogOverlay);
const AnimatedContent = animated(DialogContent);

export const Dialog: React.FC<DialogProps> = ({
  children,
  buttons,
  isOpen,
  label,
  onDismiss,
  ...props
}) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.8 },
    config: config.gentle,
  });

  return (
    <Fragment>
      {transitions(
        ({ opacity, scale }, isOpen) =>
          isOpen && (
            <AnimatedOverlay
              onDismiss={onDismiss}
              style={{ opacity }}
              {...props}
            >
              <AnimatedContent style={{ scale }} aria-label={label}>
                <header className={s.header}>
                  <span>{label}</span>
                  <Control className={s.closeControl} onClick={onDismiss}>
                    <CrossIcon />
                  </Control>
                </header>
                {children}
                {buttons && <div className={s.buttons}>{buttons}</div>}
              </AnimatedContent>
            </AnimatedOverlay>
          )
      )}
    </Fragment>
  );
};
