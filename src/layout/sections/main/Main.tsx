import photo from "../../../assets/img/photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.tsx";
import * as React from "react";
import {S} from "./Main_Styles.ts";
import Typewriter from "typewriter-effect"
import {VisuallyHidden} from "../../../styles/Common.ts";
import Tilt from 'react-parallax-tilt';

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
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}

                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="photo"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

