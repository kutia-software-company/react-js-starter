import React, { ReactNode, useState } from "react";
import {
  ConfirmationContext,
  ConfirmationContextType,
} from "./ConfirmationContext";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";

interface Props {
  children: ReactNode;
}

interface State {
  text?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmationContextProvider(props: Props) {
  const defaultText = "Are you sure?";
  const [state, setState] = useState<State>({
    text: defaultText,
    isOpen: false,
    onConfirm: () => {},
    onCancel: () => {},
  });
  function confirm(txt?: string) {
    const text = txt || defaultText;
    return new Promise((resolve, reject) => {
      setState({
        text: text,
        isOpen: !state.isOpen,
        onConfirm() {
          setState({ ...state, isOpen: false, text: text });
          resolve(true);
        },
        onCancel() {
          setState({ ...state, isOpen: false, text: text });
          reject(false);
        },
      });
    });
  }
  const context: ConfirmationContextType = {
    isOpen: state.isOpen,
    confirm: confirm,
  };
  return (
    <ConfirmationContext.Provider value={context}>
      <ConfirmationModal confirmationData={state} />
      {props.children}
    </ConfirmationContext.Provider>
  );
}
