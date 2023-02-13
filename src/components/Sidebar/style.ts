import styled from 'styled-components';

export const Container = styled.aside `
    padding:40px 20px;
    position:fixed;
    width:100%;
        max-width: 240px;
    border-right:${({theme}) => `1px solid ${theme.colors.border}` };
    height:100vh;
    a {
        text-decoration: none;
        color:${({theme}) => theme.colors.primaryTextColor};
        
    }
    .container-logo-img {
        margin-left:10px;
    }
`;

export const List = styled.ul `
    list-style-type: none;
    margin-top:40px;

    li + li {
        margin-top:20px;
    }
    li {
        transition:.2s ease-in;
        height:40px;
        display: flex;
        align-items: center;
        padding-left:10px;
        
    }
    
    li:hover img {
        transform: scale(1.1);
    }
    li:hover {
        background-color:${({theme}) =>theme.colors.border};
        border-radius:20px;

    }
    a{
        display: flex;
        align-items: center;
        width: 100%;
        gap: 20px;
        span {
            font-size:18px;
        }
    }
`;