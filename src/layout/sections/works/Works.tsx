import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import SocialImg from "../../../assets/img/proj1.png"
import {Container} from "../../../components/Container.tsx";
import * as React from "react";
import {S} from "./Works_Styles.ts";
import {AnimatePresence, motion } from "motion/react"


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
        id: 1
    },
    {
        title: "Timer",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 2
    },
    {
        title: "Social Network",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 3
    },
    {
        title: "Timer",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 4
    },
    {
        title: "Social Network",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 5
    },
    {
        title: "Timer",
        src: SocialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 6
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

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          text={w.text}
                                          src={w.src}
                                          key={w.id}
                                    />
                                </motion.div>
                            )

                        })}
                    </AnimatePresence>



                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

