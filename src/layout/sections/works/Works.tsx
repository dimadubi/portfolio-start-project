import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import SocialImg from "../../../assets/img/proj1.png"
import {Container} from "../../../components/Container.tsx";
import * as React from "react";
import {S} from "./Works_Styles.ts";

const tabsItems: Array<{ title: string, status: TabStatusType }> = [
    {
        title: "ALL",
        status: "all",
    },
    {
        title: "landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "spa",
        status: "spa",
    },
]


const worksData = [
    {
        title: "Social Network",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
    },
    {
        title: "Timer",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim",
        type: "react",
    }
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = React.useState("all");
    let filteredWorks = worksData

    if (currentFilterStatus !== "all") {
        filteredWorks = worksData.filter(work => work.type === currentFilterStatus);
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={"space-between"} alignItems={"flex-start"} wrap={"wrap"}>

                    {filteredWorks.map((w, index) => {
                        return <Work title={w.title} key={index}
                                     text={w.text}
                                     src={w.src}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

