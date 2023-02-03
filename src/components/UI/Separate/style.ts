import styled from 'styled-components';

export const Separator = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight: 700;
    color:${({theme}) => theme.colors.gray };
    margin-top:20px;
    span {
        margin:0 20px;
    }
    div {
        height: 1px;
        width: 100%;
        background-color: #dbdbdb;
    }
`;