import React, { FC } from "react";
import type { IconType } from "react-icons";
import * as AiIcons from "react-icons/ai/index.js";
import * as BsIcons from "react-icons/bs/index.js";
import * as FaIcons from "react-icons/fa/index.js";
import * as FaIcons6 from "react-icons/fa6/index.js";
import * as FiIcons from "react-icons/fi/index.js";
import * as Io5Icons from "react-icons/io5/index.js";
import * as RiIcons from "react-icons/ri/index.js";
import * as TbIcons from "react-icons/tb/index.js";
import * as TfiIcons from "react-icons/tfi/index.js";

type IconMap = Record<string, IconType>;

interface IDynamicIcon {
  icon: string;
  className?: string;
}

const iconLibraries: { [key: string]: IconMap } = {
  ai: AiIcons,
  bs: BsIcons,
  fa: FaIcons,
  fa6: FaIcons6,
  fi: FiIcons,
  io5: Io5Icons,
  ri: RiIcons,
  tb: TbIcons,
  tfi: TfiIcons,
};

const DynamicIcon: FC<IDynamicIcon> = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : undefined;

  if (!Icon) {
    return <span className="text-sm">Icon not found</span>;
  }

  return <Icon {...props} />;
};

const getIconLibrary = (icon: string): IconMap | undefined => {
  const libraryKey = icon.substring(0, 2).toLowerCase();

  return iconLibraries[libraryKey];
};

export default DynamicIcon;
