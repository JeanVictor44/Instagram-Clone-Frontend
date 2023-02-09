import styled from 'styled-components';

export const Container = styled.div `
    background-color: ${({theme}) => theme.colors.white };
    height: 100vh;
    display:flex;
    align-items: center;
    flex-direction: column;
    padding:120px 20px;

    footer {
        margin-top:80px;
    }
`;
export const LoginWrap = styled.div `
    display: flex;
    

`;
export const LoginBox = styled.form`
    display:flex;
    flex-direction: column;
    padding:40px 40px 15px 40px;
    border:${({theme}) => `1px solid ${theme.colors.border}`};
    img {
        width:175px;
        display:block;
        margin:0 auto 50px auto;
    }
    margin: 0 0 10px 0;
    label + label {
        margin-top:5px;
    }
    button {
        margin-top:14px;
    }
     a {
        text-align:center;
        font-size:12px;
        text-decoration:none;
        margin-top:15px;
        color: #00376B ;
     }
`;

export const BoxRight = styled.div `
    width:350px;
    display: flex;
    flex-direction: column;
    >span {
        text-align: center;
        margin:20px 0;
        font-size: 14px;
        color:${({theme}) => theme.colors.primaryTextColor };

    }
    .container-platforms {
        margin:0 auto;
        img + img {
            margin-left: 8px;
        }
        image-rendering {
            cursor: pointer;
        }
    }
`;
export const RegisterMiniBox = styled.div`
    border:${({theme}) => `1px solid ${theme.colors.border}`};
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:22px;
    font-size:14px;
    color:${({theme}) => theme.colors.primaryTextColor };
    a {
        color:${({theme}) => theme.colors.blue};
        font-weight:600;
        font-size:14px;
        text-decoration:none;

    }
`;
export const PhoneContainer = styled.div`
    position: relative;
    .screenhost{
        position:absolute;
        left:158px;
        top:26px;
    } 

`;