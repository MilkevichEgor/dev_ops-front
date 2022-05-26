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
  name?: string;
  // formik?: (nameOrOptions: any) => FieldInputProps<any>;
  error?: string;
  fieldInputProps?:FieldInputProps<any>;
}

const CommonInputField: React.FC<CommonInputProps> = (props) => {
  const name = props.name;
  return (
    <CommonInputWrapper>
      <img className="icon" src={props.icon} />
      <div className={props.hint ? 'info__row' : 'info__row no-hint'}>
        {(props.hint) &&
          <p className="info__row-name">{props.hint}</p>
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
          {props.error
            ? (<div>{props.error}</div>)
            : null
          }
      </div>
    </CommonInputWrapper>
  );
};

export default CommonInputField;
