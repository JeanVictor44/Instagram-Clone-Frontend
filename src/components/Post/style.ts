import styled from 'styled-components';

export const Container = styled.div `
    .likes {
        display: block;
        font-size: 14px;
        margin:10px 0px;
    }
`;

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    margin-bottom:5px;
    >div {
        display: flex;
        align-items: center;
        gap:10px;
        .post-time {
            font-size: 14px;
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
    img {
        border-radius:4px;
    }
`;

export const ContainerActions = styled.div `
display: flex;
justify-content: space-between;
margin-top:10px;
button {
        border:none;
        background-color: transparent;
        cursor: pointer;
        img {
            width:25px;
            height: 25px;
        }
}
div {
    display: flex;
    gap:15px;

    
}
`;

export const ContainerCaption = styled.div`
p{
    span {
        font-weight: bold;
        margin-right:5px;
    }
    font-size: 14px;
        color:${({theme}) => theme.colors.primaryTextColor};

}
`;
export const ContainerComments = styled.div`
`;