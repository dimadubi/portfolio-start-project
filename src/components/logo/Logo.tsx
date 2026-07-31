import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll"

export const Logo = () => {
    return (
        <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={"code"}/>
        </a>
    );
};
