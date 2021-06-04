import React from 'react';

//components
import { Modal as ModalRS } from 'reactstrap';

//styles
import './Modal.scss';

interface Props {
  isOpen: boolean;
  children: React.ReactChild;
  title?: string;
  big?: boolean;
  toggle: () => void;
}

export const Modal = (props: Props) => {
  return (
    <ModalRS className="Modal" isOpen={props.isOpen} toggle={props.toggle}>
      {props.title && <h3>{props.title}</h3>}
      {props.children}
    </ModalRS>
  );
};
