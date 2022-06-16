import { FieldInputProps } from 'formik';
import React from 'react';
import CommonInputWrapper from '../components/CommonInputField.styles';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldInputProps?: FieldInputProps<any>;
}

const CommonInputField: React.FC<CommonInputProps> = (props) => {
  return (
    <CommonInputWrapper
      isError={!!props.error}
      isSuccess={!!props.success}
    >
      <img className="icon" src={props.icon} />
      <div className={props.hint ? 'info__row' : 'info__row no-hint'}>
        {props.error
          ? (<div
            className="error"
          >{props.error}</div>)
          : null
        }
        {props.hint &&
          <p className="info__row-name">
            {props.hint}
          </p>
        }
        {props.success
          ? <div className="success" />
          : null
        }
        <input
          name={props.name}
          className="info__row-value info__input"
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
