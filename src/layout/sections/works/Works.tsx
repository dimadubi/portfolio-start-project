import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import SocialImg from "../../../assets/img/proj1.png"
import {Container} from "../../../components/Container.tsx";
import * as React from "react";
import { S } from "./Works_Styles.ts";

const worksItems = ["All", "landing page", "React", "spa"]


const workData= [
    {
        title: "Social Network",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title: "Timer",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim",
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} alignItems={"flex-start"} wrap={"wrap"}>

                    {workData.map((w, index) => {
                        return <Work title={w.title} key={index}
                                     text={w.text}
                                     src={w.src}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

