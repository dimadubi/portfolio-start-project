import { S } from "../HeaderMenu_Styles.ts";
import {Menu} from "../menu/Menu.tsx";
import * as React from "react";
import {useState} from "react";



export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {

    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>

            <S.BurgerButton isOpen = {menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen = {menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};


