import styled from 'styled-components';

export const Container = styled.div `
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img:nth-child(1){
        width: 100px;
    }
    img:nth-child(2){
        position: absolute;
        bottom:20px;
    }
`;