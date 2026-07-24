import photo from "../../../assets/img/photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.tsx";
import * as React from "react";
import { S } from "./Main_Styles.ts";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper alignItems={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Dzmitry Paplauski</span> </S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

