import React from 'react';
import { FieldInputProps } from 'formik';

import CommonInputWrapper from './CommonInputField.styles';

type CommonInputProps = {
  icon: string;
  placeholder?: string;
  hint?: string;
  type?: string;
  width?: string;
  disabled?: boolean;
  value?: string;
  name: string;
  submit?: React.FormEvent<HTMLFormElement>
  error?: string;
  success?: string;
  fieldInputProps?: FieldInputProps<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  onClickOnIcon?: () => void;
}

const CommonInputField: React.FC<CommonInputProps> = (props) => {
  return (
    <CommonInputWrapper
      isError={Boolean(props.error)}
      isSuccess={Boolean(props.success)}
    >
      <img
        className="input__icon"
        src={props.icon}
        onClick={props.onClickOnIcon}
      />
      <div className={props.hint ? 'input__info-block' : 'input__info-block no-hint'}>
        {props.error
          ? (<div
            className="error"
          >{props.error}</div>)
          : null
        }
        {props.hint &&
          <p className="input__info-name">
            {props.hint}
          </p>
        }
        {props.success
          ? <div className="success" />
          : null
        }
        <input
          name={props.name}
          className="input__info-value input__input"
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={props.value}
          {...props.fieldInputProps}
        />
      </div>
    </CommonInputWrapper>
  );
};

export default CommonInputField;
