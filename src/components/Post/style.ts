import styled from 'styled-components';

export const Container = styled.div `
`;

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    margin-bottom:5px;
    div {
        display: flex;
        align-items: center;
        gap:10px;
        .post-time {
            font-size: 12px;
            color:${({theme}) => theme.colors.gray};
        }
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        &:hover {
            color:${({theme}) => theme.colors.gray};
        }
    }

`;

export const ContainerImage = styled.div`

`;

export const ContainerActions = styled.div `
`;


export const ContainerComments = styled.div`
`;