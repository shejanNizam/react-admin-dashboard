import { CiSettings } from "react-icons/ci";
import { FaServicestack } from "react-icons/fa";
import { MdOutlineSecurityUpdateWarning } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import About from "../pages/Settings/About";
import EditAbout from "../pages/Settings/EditAbout";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import TermsConditions from "../pages/Settings/TermsConditions";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },

  {
    name: "Settings",
    rootPath: "settings",
    icon: CiSettings,
    children: [
      //   {
      //     name: "Profile",
      //     path: "settings/profile",
      //     icon: CiUser,
      //     element: <MyProfile />,
      //   },
      //   {
      //     path: "settings/profile/edit",
      //     element: <EditMyProfile />,
      //   },
      {
        name: "About Us",
        icon: FaServicestack,
        path: "settings/about-us",
        element: <About />,
      },
      {
        name: "",
        path: "settings/about-us/edit",
        element: <EditAbout />,
      },
      {
        name: "Terms & Services",
        icon: TbAirConditioning,
        path: "settings/terms-conditions",
        element: <TermsConditions />,
      },
      {
        name: "",
        path: "settings/terms-conditions/edit",
        element: <EditTermsConditions />,
      },
      {
        name: "Privacy Policy",
        icon: MdOutlineSecurityUpdateWarning,
        path: "settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        name: "",
        path: "settings/privacy-policy/edit",
        element: <EditPrivacyPolicy />,
      },
    ],
  },
];
