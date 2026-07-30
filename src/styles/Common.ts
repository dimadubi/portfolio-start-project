import {theme} from "./Theme.tsx";
import styled from "styled-components";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,

}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType)=> `
font-family: ${family || "Poppins"};
font-weight: ${weight || 400};
color: ${color || theme.colors.font};
line-height: ${lineHeight || 1.2};
font-size: min(calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`
// font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;