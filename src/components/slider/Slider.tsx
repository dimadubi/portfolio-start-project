import {S} from "./Slider_Styles.ts";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./../../styles/slider.css"

type SlidePropsType = {
    text: string,
    username: string,
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.username}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
           username={"ivan ivanow"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
           username={"petr ivanow"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
           username={"dima ivanow"}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);