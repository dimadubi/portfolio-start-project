import photo from "../../../assets/img/photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.tsx";
import * as React from "react";
import {S} from "./Main_Styles.ts";
import Typewriter from "typewriter-effect"
import {VisuallyHidden} from "../../../styles/Common.ts";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper alignItems={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Dzmitry Paplauski</span> </S.Name>
                        <S.MainTitle>
                            <VisuallyHidden>A Web Developer.</VisuallyHidden>
                            <span aria-hidden="true">
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer', "A Frontend Developer"],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                                </span>
                        </S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

