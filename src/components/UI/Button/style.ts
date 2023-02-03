import styled from 'styled-components';

interface PressButtonProps {
    textWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
    color: string,
    backgroundColor: string
}
export const PressButton = styled.button<PressButtonProps>`
    background-color: ${({backgroundColor}) => backgroundColor };
    color:${({color}) => color };
    font-size:15px;
    border:none;
    border-radius:8px;
    font-weight: ${({textWeight}) => textWeight ? textWeight : 400};
    padding:8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`; 