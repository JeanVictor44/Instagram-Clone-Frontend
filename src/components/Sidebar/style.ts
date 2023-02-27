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
    button.button-more {
        cursor: pointer;
        position:absolute;
        bottom:20px;
        display:flex;
        align-items:center;
        width:80%;
        background-color:transparent;
    
        border:none;
        gap:20px;
        padding-left:10px;
        height:40px;

        span {
            font-size:18px;
        }

    }
    button.button-more:hover {
        background-color:${({theme}) =>theme.colors.border};
        border-radius:20px;
    }
    button.button-more:hover > :first-child{
        transform: scale(1.1);
    }
`;

interface ListMoreActionsProps {
    isOpen: boolean
}
export const ListMoreActions = styled.ul<ListMoreActionsProps>`
    display:${({isOpen}) => isOpen ? 'block' : 'none'};
    width:120%;
    list-style: none;
    margin:30px 0 0 20px;
    filter:drop-shadow(0 0 5px rgba(0,0,0, .0975));

    li + li {
        border-top:0.5px rgb(219,219,219) solid;
        filter:drop-shadow(0 0 5px rgba(0,0,0, .0975));
        
    }
    li:hover {
        filter:brightness(0.8);
    }


    button {
        background:transparent;
        border:none;
        font-size: 16px;
        cursor: pointer;

    }

    a, button{
        display: flex;
        padding:10px;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        background: rgba(255,255,255,0.5);
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