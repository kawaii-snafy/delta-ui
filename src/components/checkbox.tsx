import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';
import imgSelected from '../assets/images/select.svg';

interface ICheckBox {
  size: 'small' | 'medium' | 'large';
  isDisable: boolean;
}
const CheckBoxComponent = styled.label<ICheckBox>`
  display: inline-flex;
  cursor: pointer;
`;

const CheckBoxComponentValue = styled.div`
  box-sizing: border-box !important;
  width: 21px;
  height: 21px;
  border: 1px solid ${(props) => props.theme.colors.gray.main};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white.main};

  &.active {
    border: 0 solid ${(props) => props.theme.colors.gray.main};
    background-image: url(${imgSelected});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CheckBoxComponentLabel = styled.div`
  margin-left: 5px;
  font: normal normal 13px/20px Montserrat, sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary.main ?? lightTheme?.colors?.secondary.main};
`;

export interface IProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  isDisable?: boolean;
  value: boolean;
  onClick: () => void;
  style?: CSSProperties;
}

export const CheckBox: React.FC<IProps> = (props) => {
  const {
    label,
    size = 'medium',
    isDisable = false,
    value = false,
    onClick,
    ...other
  } = props;

  const [checked, setChecked] = useState<boolean>(value);

  const handleChange = () => {
    setChecked(!checked);
    onClick();
  };

  return (
    <CheckBoxComponent
      size={size}
      isDisable={isDisable}
      onClick={handleChange}
      {...other}
    >
      <CheckBoxComponentValue className={checked ? 'active' : ''} />
      {label && <CheckBoxComponentLabel>{label}</CheckBoxComponentLabel>}
    </CheckBoxComponent>
  );
};
