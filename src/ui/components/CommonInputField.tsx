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
}

const CommonInputField: React.FC<CommonInputProps> = (props) => {
  return (
    <CommonInputWrapper>
      <img className="icon" src={props.icon} />
      <div className={props.hint ? 'info__row' : 'info__row no-hint'}>
        {(props.hint) &&
          <p className="info__row-name">{props.hint}</p>
        }
        <input
          className="info__row-value info__input"
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={props.value}
          />
      </div>
    </CommonInputWrapper>
  );
};

export default CommonInputField;
