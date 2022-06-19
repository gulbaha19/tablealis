import React, { FC, forwardRef, LegacyRef, HTMLAttributes } from "react";
import styled from "@emotion/styled";

import { ReactComponent as IconUp } from "../../utils/icons/IconUp.svg";
import { ReactComponent as IconDown } from "../../utils/icons/IconDown.svg";
import { ReactComponent as Divider } from "../../utils/icons/Divider.svg";
import { ReactComponent as Plus } from "../../utils/icons/Plus.svg";
import { ReactComponent as Minus } from "../../utils/icons/Minus.svg";
import { ReactComponent as Message } from "../../utils/icons/Message.svg";
import { ReactComponent as Done } from "../../utils/icons/Done.svg";
import { ReactComponent as InProcess } from "../../utils/icons/InProcess.svg";
import { ReactComponent as Clock } from "../../utils/icons/Clock.svg";
import { ReactComponent as Canceled } from "../../utils/icons/Canceled.svg";
import { ReactComponent as Dot } from "../../utils/icons/Dot.svg";
import { ReactComponent as Profile } from "../../utils/icons/Profile.svg";
import { ReactComponent as Close } from "../../utils/icons/Close.svg";

export const iconMap = {
  IconUp,
  IconDown,
  Divider,
  Plus,
  Minus,
  Message,
  Done,
  InProcess,
  Clock,
  Canceled,
  Dot,
  Profile,
  Close,
};

export type IconType = keyof typeof iconMap;

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  type: IconType;
  color?: string;
  width?: string;
  height?: string;
}

const Container = styled("svg")<Partial<IconProps>>`
  display: inline-block;
  height: ${({ height }) => height ?? "1em"};
  width: ${({ width }) => width ?? "1em"};
  line-height: 1;

  color: ${({ color }) => color ?? "inherit"};
  vertical-align: -0.125em;
`;
const ContainerAbsolute = styled("svg")<Partial<IconProps>>`
  margin-top: 0px;
  right: 0;
  color: ${({ color }) => color ?? "inherit"};
  /* vertical-align: -0.125em; */
  position: absolute;
`;
const ContainerSmall = styled("svg")<Partial<IconProps>>`
  display: inline-block;
  height: 6px;
  width: 6px;
  line-height: 1;

  color: ${({ color }) => color ?? "inherit"};
  vertical-align: -0.125em;
`;
const ContainerMed = styled("svg")<Partial<IconProps>>`
  display: inline-block;
  height: 12px;
  width: 12px;
  line-height: 1;

  color: ${({ color }) => color ?? "inherit"};
  vertical-align: -0.125em;
`;
export const Icon: FC<IconProps> = forwardRef(
  ({ type, ...svgProps }, ref: LegacyRef<SVGSVGElement>) => (
    <Container as={iconMap[type]} {...svgProps} ref={ref} />
  ),
);
export const IconAbsolute: FC<IconProps> = forwardRef(
  ({ type, ...svgProps }, ref: LegacyRef<SVGSVGElement>) => (
    <ContainerAbsolute as={iconMap[type]} {...svgProps} ref={ref} />
  ),
);
export const IconSmall: FC<IconProps> = forwardRef(
  ({ type, ...svgProps }, ref: LegacyRef<SVGSVGElement>) => (
    <ContainerSmall as={iconMap[type]} {...svgProps} ref={ref} />
  ),
);
export const IconMed: FC<IconProps> = forwardRef(
  ({ type, ...svgProps }, ref: LegacyRef<SVGSVGElement>) => (
    <ContainerMed as={iconMap[type]} {...svgProps} ref={ref} />
  ),
);
