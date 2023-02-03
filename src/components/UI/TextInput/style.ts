import styled from 'styled-components';


export const Container = styled.label `
    position: relative;    
`;


export const Input = styled.input`
    border:${({theme}) => `1px solid ${theme.colors.border}`};
    background-color: ${({theme}) => theme.colors.white};
    width:100%;
    border-radius:4px;
    height:38px;
    padding-top:8px;
    padding-left:8px;
    outline:none;
    color:${({theme}) => theme.colors.primaryTextColor };
`;
interface PlaceholderProps {
    movePlaceholder: boolean
}
export const Placeholder = styled.span <PlaceholderProps >`
    top:${({movePlaceholder}) => movePlaceholder ? '8px' : '50%'};

    transform:translateY(-50%);
    left:10px;
    position: absolute;
    font-size: ${({movePlaceholder}) => movePlaceholder ? '10px' : '12px'};

    color:${({theme}) => theme.colors.gray};
    cursor: text;
    transition: .2s ;
`;