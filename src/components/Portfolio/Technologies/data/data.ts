import iconWebpack from "/src/assets/icons/techlogies/icon-webpack.svg";
import iconVite from "/src/assets/icons/techlogies/icon-vite.svg";
import iconReactQuery from "/src/assets/icons/techlogies/icon-react-query.svg";
import iconRedux from "/src/assets/icons/techlogies/icon-redux.svg";
import iconAxios from "/src/assets/icons/techlogies/icon-axios.svg";
import iconFigma from "/src/assets/icons/techlogies/icon-figma.svg";
import iconGitHub from "/src/assets/icons/techlogies/icon-github.svg";
import iconAntDesign from "/src/assets/icons/techlogies/icon-ant-design.svg";
import iconI18next from "/src/assets/icons/techlogies/icon-i18next.svg";
import iconStyledComponents from "/src/assets/icons/techlogies/icon-styled-components.svg";
import { TECHNOLOGIES } from "../../../../constants/constansts";

type ITechnologiesData = {
  title: string;
  icon: string;
  link: string;
};

export const technologiesData: ITechnologiesData[] = [
  {
    title: "Webpack",
    icon: iconWebpack,
    link: TECHNOLOGIES.webpack,
  },
  {
    title: "Vite",
    icon: iconVite,
    link: TECHNOLOGIES.vite,
  },
  {
    title: "React query",
    icon: iconReactQuery,
    link: TECHNOLOGIES.reactQuery,
  },
  {
    title: "Redux",
    icon: iconRedux,
    link: TECHNOLOGIES.redux,
  },
  {
    title: "Axios",
    icon: iconAxios,
    link: TECHNOLOGIES.axios,
  },
  {
    title: "Figma",
    icon: iconFigma,
    link: TECHNOLOGIES.figma,
  },
  {
    title: "GitHub",
    icon: iconGitHub,
    link: TECHNOLOGIES.github,
  },
  {
    title: "Ant Design",
    icon: iconAntDesign,
    link: TECHNOLOGIES.antDesign,
  },
  {
    title: "i18next",
    icon: iconI18next,
    link: TECHNOLOGIES.i18next,
  },
  {
    title: "Styled Components",
    icon: iconStyledComponents,
    link: TECHNOLOGIES.styledComponents,
  },
];
