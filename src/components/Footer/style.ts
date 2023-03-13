import styled from 'styled-components';

export const Container = styled.footer`

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap:20px;
        list-style: none;
        a {
            color:${({theme}) => theme.colors.secondaryTextColor};  
            text-decoration: none;
            font-size: 13px;
            font-weight: 400;
        }
        a:hover {
            text-decoration: underline;
            text-decoration-color: ${({theme}) => theme.colors.dark};
        }
        
    }
    .footer-bottom {
        color:${({theme}) => theme.colors.secondaryTextColor};  
        display: flex;
        font-size: 13px;
        font-weight: 400;
        gap:20px;
        justify-content: center;
        margin-top: 15px;
    }
`;