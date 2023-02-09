import styled from 'styled-components';

interface PressButtonProps {
    textWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',

}

export const PressButton = styled.button<PressButtonProps>`
    background-color: #0095F6;
    color:#FFF;
    font-size:15px;
    border:none;
    border-radius:8px;
    font-weight: ${({textWeight}) => textWeight ? textWeight : 400};
    padding:8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .2s ease-in;
    &:hover {
        filter:brightness(0.9);
    }
`; 