import {theme} from "../../styles/Theme.tsx";
import styled from "styled-components";

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    
    margin: 22px 0 42px;
    display: inline-block;
`

const Pagination = styled.div`

    text-align: center;
    
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background: ${theme.colors.accent};
            width: 20px;
        }
    }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}