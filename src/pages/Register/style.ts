import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.white };
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top:10px;    
    
    > div {
        width: 100%;
        max-width: 340px;
        
    }
    & > form {
        min-height: 500px;
        width:340px;
        img {
            margin-bottom:20px;
        }
        h2 {
            text-align: center;
            color:${({theme}) => theme.colors.gray };
            font-size:17px;
            font-weight: 800;
        }
        > p {
            color:${({theme}) => theme.colors.gray};
            margin: 0 auto;
            width: 100%;
            font-size:12px;
            margin:15px;
        }
    }
    footer {
        margin-top:80px;
    }

    > span {
        margin:20px 0;
        font-size:14px;
    }

    .container-platforms {
        display: flex;
        justify-content: center;
    }
    

`;