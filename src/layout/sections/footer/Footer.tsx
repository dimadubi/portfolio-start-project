import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import { S } from "./Footer_Styles.ts";
import * as React from "react";


const SocialItemsData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "linkedIn"
    },

]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} alignItems={"center"}>
                <S.Name>Dzmitry</S.Name>
                <S.SocialList>

                    {SocialItemsData.map((s, index) => {
                        return <S.SocialLink key={index}>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId} />
                        </S.SocialLink>
                    })}

                </S.SocialList>
                <S.Copyright>© 2026 Dzmitry Paplauski, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};


