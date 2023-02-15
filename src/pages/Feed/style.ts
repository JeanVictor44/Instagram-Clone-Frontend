import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top:45px;
    
`;
export const RightSide = styled.aside`
    max-width: 100%;
    width:300px;
    height:50vh;
    margin-right:18%;
    button {
        color: #0095F6;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    button:hover {
        color: #000;
    }
    .suggestion {
        display: flex;
        justify-content: space-between;
        margin-top:15px;
        h3 {
            font-size:15px;
            color:${({theme}) => theme.colors.gray };
        }
    }
`;

export const SuggestionList = styled.ul `
    margin: 15px 0;
    list-style-type: none;

    li + li {
        margin-top:10px;
    }
    li {
        display: flex;
        justify-content: space-between;
    }
`; 
export const HeaderRightSide = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Principal = styled.div`
    width:100%;
    max-width:500px;
    margin:0 60px 0 auto;
`;

export const Footer = styled.footer `
`;