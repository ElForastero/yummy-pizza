import React from 'react';
import { Input } from 'src/components/atoms/Input';
import { TextArea } from 'src/components/atoms/TextArea';
import s from './AddressForm.module.css';

export const AddressForm: React.FC = () => (
  <div className={s.root}>
    <Input placeholder="Fill your address..." />
    <TextArea placeholder="You can leave a comment here..." />
  </div>
);
