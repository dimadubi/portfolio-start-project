import {FlexWrapper} from "../FlexWrapper.ts";
import { S } from "./Slider_Styles.ts";
import * as React from "react";

export const Slider:React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</S.Text>
                    <S.Name>@ivan ivanow</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

