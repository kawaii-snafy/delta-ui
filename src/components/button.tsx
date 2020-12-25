import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

interface IButton {
  buttonType: 'primary' | 'negative' | 'outline-primary' | 'outline-negative';
  size: 'small' | 'medium' | 'large';
}

const ButtonComponent = styled.button<IButton>`
  margin: 0;
  border: 0;
  outline: 0;
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '6px 12px';
      case 'large':
        return '12px 24px';
      case 'medium':
      default:
        return '8px 16px';
    }
  }};
  border-radius: 30px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '10px';
      case 'large':
        return '16px';
      case 'medium':
      default:
        return '12px';
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case 'small':
        return '10px';
      case 'large':
        return '16px';
      case 'medium':
      default:
        return '12px';
    }
  }};
  color: ${(props) => {
    if (!props.disabled) {
      if (
        props.buttonType == 'outline-primary' ||
        props.buttonType == 'outline-negative'
      ) {
        switch (props.buttonType) {
          case 'outline-negative':
            return (
              props.theme?.colors?.error.main ?? lightTheme.colors.error.main
            );
          case 'outline-primary':
          default:
            return (
              props.theme?.colors?.primary.main ??
              lightTheme.colors.primary.main
            );
        }
      } else {
        return '#FFFFFF';
      }
    }

    return '#FFFFFF';
  }};
  background: ${(props) => {
    if (!props.disabled) {
      if (
        props.buttonType !== 'outline-primary' &&
        props.buttonType !== 'outline-negative'
      ) {
        switch (props.buttonType) {
          case 'negative':
            return (
              props.theme?.colors?.error.main ?? lightTheme.colors.error.main
            );
          case 'primary':
          default:
            return (
              props.theme?.colors?.primary.main ??
              lightTheme.colors.primary.main
            );
        }
      } else {
        return 'none';
      }
    } else {
      return props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main;
    }
  }};
  border: ${(props) => {
    if (!props.disabled) {
      if (
        props.buttonType == 'outline-primary' ||
        props.buttonType == 'outline-negative'
      ) {
        switch (props.buttonType) {
          case 'outline-negative':
            return `2px solid ${
              props.theme?.colors?.error.main ?? lightTheme.colors.error.main
            }`;
          case 'outline-primary':
          default:
            return `2px solid ${
              props.theme?.colors?.primary.main ??
              lightTheme.colors.primary.main
            }`;
        }
      } else {
        switch (props.buttonType) {
          case 'negative':
            return `2px solid ${
              props.theme?.colors?.error.main ?? lightTheme.colors.error.main
            }`;
          case 'primary':
          default:
            return `2px solid ${
              props.theme?.colors?.primary.main ??
              lightTheme.colors.primary.main
            }`;
        }
      }
    } else {
      return `2px solid ${
        props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main
      }`;
    }
  }};
  cursor: pointer;

  :hover {
    background: ${(props) => {
      if (!props.disabled) {
        if (
          props.buttonType !== 'outline-primary' &&
          props.buttonType !== 'outline-negative'
        ) {
          switch (props.buttonType) {
            case 'negative':
              return (
                props.theme?.colors?.error.hover ??
                lightTheme.colors.error.hover
              );
            case 'primary':
            default:
              return (
                props.theme?.colors?.primary.hover ??
                lightTheme.colors.primary.hover
              );
          }
        } else {
          return 'none';
        }
      } else {
        return props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main;
      }
    }};
    border: ${(props) => {
      if (!props.disabled) {
        if (
          props.buttonType == 'outline-primary' ||
          props.buttonType == 'outline-negative'
        ) {
          switch (props.buttonType) {
            case 'outline-negative':
              return `2px solid ${
                props.theme?.colors?.error.hover ??
                lightTheme.colors.error.hover
              }`;
            case 'outline-primary':
            default:
              return `2px solid ${
                props.theme?.colors?.primary.hover ??
                lightTheme.colors.primary.hover
              }`;
          }
        } else {
          switch (props.buttonType) {
            case 'negative':
              return `2px solid ${
                props.theme?.colors?.error.hover ??
                lightTheme.colors.error.hover
              }`;
            case 'primary':
            default:
              return `2px solid ${
                props.theme?.colors?.primary.hover ??
                lightTheme.colors.primary.hover
              }`;
          }
        }
      } else {
        return `2px solid ${
          props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main
        }`;
      }
    }};
    color: ${(props) => {
      if (!props.disabled) {
        if (
          props.buttonType == 'outline-primary' ||
          props.buttonType == 'outline-negative'
        ) {
          switch (props.buttonType) {
            case 'outline-negative':
              return (
                props.theme?.colors?.error.hover ??
                lightTheme.colors.error.hover
              );
            case 'outline-primary':
            default:
              return (
                props.theme?.colors?.primary.hover ??
                lightTheme.colors.primary.hover
              );
          }
        } else {
          return '#FFFFFF';
        }
      }

      return '#FFFFFF';
    }};
  }

  :active {
    background: ${(props) => {
      switch (props.buttonType) {
        case 'outline-primary':
        case 'outline-negative':
          return 'none';
        case 'negative':
          return (
            props.theme?.colors?.error.active ?? lightTheme.colors.error.active
          );
        case 'primary':
        default:
          return (
            props.theme?.colors?.primary.active ??
            lightTheme.colors.primary.active
          );
      }
    }};
    border: ${(props) => {
      if (!props.disabled) {
        switch (props.buttonType) {
          case 'outline-negative':
          case 'negative':
            return `2px solid ${
              props.theme?.colors?.error.active ??
              lightTheme.colors.error.active
            }`;
          case 'primary':
          case 'outline-primary':
          default:
            return `2px solid ${
              props.theme?.colors?.primary.active ??
              lightTheme.colors.primary.active
            }`;
        }
      } else {
        return `2px solid ${
          props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main
        }`;
      }
    }};
    color: ${(props) => {
      if (!props.disabled) {
        if (
          props.buttonType == 'outline-primary' ||
          props.buttonType == 'outline-negative'
        ) {
          switch (props.buttonType) {
            case 'outline-negative':
              return (
                props.theme?.colors?.error.active ??
                lightTheme.colors.error.active
              );
            case 'outline-primary':
            default:
              return (
                props.theme?.colors?.primary.active ??
                lightTheme.colors.primary.active
              );
          }
        } else {
          return '#FFFFFF';
        }
      }

      return '#FFFFFF';
    }};
  }
}
`;

export interface IProps {
  buttonType?: 'primary' | 'negative' | 'outline-primary' | 'outline-negative';
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<IProps> = (props) => {
  const {
    children,
    buttonType = 'primary',
    label = 'BUTTON',
    size = 'medium',
  } = props;

  return (
    <ButtonComponent {...props} buttonType={buttonType} size={size}>
      {children ?? label}
    </ButtonComponent>
  );
};
