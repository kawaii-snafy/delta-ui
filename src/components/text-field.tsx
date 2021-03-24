import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';
import InputMask, {
  BeforeMaskedStateChangeStates,
  InputState,
} from 'react-input-mask';

// @ts-ignore
const TextFieldComponent = styled.div<{ width: number | string | null }>`
  position: relative;
  ${(props) =>
    typeof props.width == 'number'
      ? `width: ${props.width}px`
      : typeof props.width == 'string'
      ? `width: ${props.width}px`
      : ``};
  height: 50px;
`;

const Label = styled.label``;

const Input = styled.input<{ value: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 15px;
  border: 0;
  outline: 0;
  background: none;
  box-sizing: border-box;
  font: normal 400 14px Montserrat, sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary?.main ?? lightTheme?.colors?.secondary.main};
`;

const MaskedInput = styled(InputMask)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 15px;
  border: 0;
  outline: 0;
  background: none;
  box-sizing: border-box;
  font: normal 400 14px Montserrat, sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary?.main ?? lightTheme?.colors?.secondary.main};
`;

const Fieldset = styled.fieldset`
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  position: absolute;
  border-style: solid;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${(props) =>
    props.theme?.colors?.gray?.main ?? lightTheme.colors.gray.main};
  pointer-events: none;
  box-sizing: inherit;
  transition-duration: 100ms;

  ${Input}:focus ~ &, ${MaskedInput}:focus ~ & {
    border-color: ${(props) =>
      props.theme?.colors?.primary?.main ??
      lightTheme.colors.primary.main} !important;
  }

  ${Input}:hover ~ &, ${MaskedInput}:hover ~ & {
    border-color: ${(props) =>
      props.theme?.colors?.gray?.hover ?? lightTheme.colors.gray.hover};
  }
`;

const Legend = styled.legend`
  width: auto;
  max-width: 0.01px;
  height: 11px;
  display: block;
  padding: 0;
  visibility: hidden;
  text-align: left;
  box-sizing: inherit;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${Input}:focus ~ ${Fieldset} &, ${MaskedInput}:focus ~ ${Fieldset} & {
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
  }

  &.active {
    max-width: 1000px;
  }

  span {
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    font: normal bold 14px Montserrat, sans-serif;
  }
`;

const Title = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transition-duration: 100ms;
  transform: translate(10px, -50%) scale(1);
  font: normal bold 14px Montserrat, sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary?.main ?? lightTheme?.colors?.secondary.main};
  cursor: text;

  &.active {
    transform: translate(10px, -33px) scale(0.75);
  }

  ${Input}:focus ~ &, ${MaskedInput}:focus ~ & {
    transform: translate(10px, -33px) scale(0.75);
  }
`;

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface IMaskedProps {
  mask?: string | Array<string | RegExp>;
  maskPlaceholder?: string | null;
  // maskChar?: string | null; // на версии 3 - maskPlaceholder
  alwaysShowMask?: boolean;
  beforeMaskedStateChange?: (
    states: BeforeMaskedStateChangeStates,
  ) => InputState;
}

export interface TextFieldProps extends IProps, IMaskedProps {}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { label, width, value, mask, ...other } = props;
    const validValue = !!value ? String(value) : '';

    return (
      <TextFieldComponent width={!!width ? width : null}>
        <Label>
          {!!mask ? (
            <MaskedInput value={validValue} mask={mask} {...other} />
          ) : (
            <Input {...other} ref={ref} value={validValue} />
          )}
          <Fieldset>
            <Legend className={!!value ? 'active' : ''}>
              {label && <span>{label}</span>}
            </Legend>
          </Fieldset>
          <Title className={!!value ? 'active' : ''}>{label}</Title>
        </Label>
      </TextFieldComponent>
    );
  },
);
