import styled from 'styled-components';

export const Container = styled.div`
    img {
        width:60px;
        height:60px;
        border-radius: 50%;
        border:2px solid #fff;
        
    }

    &:after {
        display: block;
        border-radius: 100%;
        content: '';
        width: 108%;
        height: 108%;
        position: absolute;
        z-index: -1;
        left: -4%;
        top: -4%;
        background-image: linear-gradient(#f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 );
    }
    border:2px solid #fff;
    position: relative;
    z-index: 1;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;