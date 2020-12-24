import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';
import imgSelected from '../assets/img/select.svg';
import imgSelectedActive from '../assets/img/selectActive.svg'

const CheckBoxComponent = styled.span<{ size: 'md' | 'lg', disabled: 'on' | 'off' | 'onActive', active: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: ${(props) => {
        switch (props.size) {
            case 'md':
                return '30px';
                break;
            case 'lg':
                return '40px';
                break;        
            default:
                return '30px';    
        }
    }};
    height: ${(props) => {
        switch (props.size) {
            case 'md':
                return '30px';
                break;
            case 'lg':
                return '40px';
                break;        
            default:
                return '30px';    
        }
    }};
    border: ${(props) => {
        switch (props.disabled) {
            case 'onActive':
                return `1px solid transparent;`;
                break;    
            default:
                return '1px solid #797979;';   
        }
    }};
    border-radius: 7px;
    cursor: pointer;
    transition: all 300ms;
    :hover {
        border: ${(props) => {
            switch (props.disabled) {
                case 'on':
                    return '1px solid #797979;';
                    break;
                case 'off':
                    return '1px solid #CFD8DC;';
                    break;
                case 'onActive':
                    return `1px solid transparent;`;    
                default:
                    return '1px solid #797979;';   
            }
        }};
    }
    background-color: ${(props) => {
        switch (props.disabled) {
            case 'on':
                return '#CFD8DC;';
                break;
            case 'off':
                return 'transparent;';
                break;
            default:
                return 'transparent;';   
        }
    }};
    background-image: ${(props) => {
        switch (props.disabled) {
            case 'on':
                return '';
                break;
            case 'onActive':
                return `url(${imgSelectedActive})`;
                break;    
            case 'off':
                return(props.active ? `url(${imgSelected}) !important;` : '');
                break;
            default:
                return '';   
        }
    }};
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: center;
`;

const CheckBoxComponentLabel = styled.span`
    display: block;
    position: absolute;
    width: 80px;
    height: auto;
    border-radius: 3px;
    left: 100%;
    margin-left: 14px;
    line-height: 20px;
`;

const changeActive = () => {
    //
}

export interface IProps {
    label: string;
    size: 'md' | 'lg';
    disabled: 'on' | 'off' | 'onActive';
    active: boolean;
    value: boolean;
}

export const CheckBox: React.FC<IProps> = (props) => {
    const {
        label = 'checkbox это короч',
        size = 'md',
        disabled = 'off',
        active = false,
        value = false,
    } = props;

    return(
        <CheckBoxComponent 
            size={size} 
            disabled={disabled}
            active={active}
            onClick = {changeActive}
        >
            <CheckBoxComponentLabel>{ label.length != 0 && label.length < 20 ? label : 'checkbox это короч' }</CheckBoxComponentLabel>
        </CheckBoxComponent>
    );
}