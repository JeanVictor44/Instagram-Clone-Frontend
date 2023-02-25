import styled from 'styled-components';

interface ContainerImgProps {
    size: number
}
export const ContainerImg = styled.div<ContainerImgProps>`


    img {
        width:${({size}) => `${size}px`};
        height:${({size}) => `${size}px`};
        object-fit: cover;

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
interface ContainerProps {
    isHorizontal: boolean
    profileNameBold: boolean
}
export const Container = styled.div<ContainerProps> `
    display: flex;
    flex-direction: ${({isHorizontal}) => isHorizontal ? 'row' : 'column'};
    font-weight: ${({profileNameBold}) => profileNameBold ? 'bold' : 'normal'};
    gap:5px;
    align-items: center;    
    span {
        font-size:12px;
    }
    .box-column {
        display: flex;
        flex-direction: column;
        span.location {
            font-weight: normal;
            margin-top: 5px;
        }
        span.post-time {
            font-size: 12px;
            color:${({theme}) => theme.colors.gray};
            display: inline-block;
            margin-left:10px;
        }
        
    }
    
`;