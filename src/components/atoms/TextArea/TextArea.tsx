import React, { HTMLAttributes } from 'react';
import s from './TextArea.module.css';

type Props = HTMLAttributes<HTMLTextAreaElement>;

export const TextArea: React.FC<Props> = ({ ...props }) => (
  <textarea className={s.root} {...props} />
);
