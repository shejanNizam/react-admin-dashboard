import { CiSettings, CiUser } from "react-icons/ci";
import { FaServicestack } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { MdCategory, MdOutlineSecurityUpdateWarning } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import Category from "../pages/Category/Category";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import Earning from "../pages/Earning/Earning";
import Notifications from "../pages/Notifications/Notifications";
import Others from "../pages/Others/Others";
import EditMyProfile from "../pages/Profile/EditMyProfile";
import MyProfile from "../pages/Profile/MyProfile";
import About from "../pages/Settings/About";
import EditAbout from "../pages/Settings/EditAbout";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import TermsConditions from "../pages/Settings/TermsConditions";
import Users from "../pages/Users/Users";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "",
    path: "notifications",
    element: <Notifications />,
  },
  {
    name: "Users",
    path: "/users",
    icon: PiUsersThree,
    element: <Users />,
  },
  {
    name: "Category",
    path: "category",
    icon: MdCategory,
    element: <Category />,
  },
  {
    name: "Earning",
    path: "earning",
    icon: GrMoney,
    element: <Earning />,
  },
  {
    name: "Others Comp...",
    path: "others1",
    icon: GrMoney,
    element: <Others />,
  },
  {
    name: "Others Comp...",
    path: "others2",
    icon: GrMoney,
    element: <Others />,
  },
  {
    name: "Others Comp...",
    path: "others3",
    icon: GrMoney,
    element: <Others />,
  },
  {
    name: "Others Comp...",
    path: "others4",
    icon: GrMoney,
    element: <Others />,
  },
  {
    name: "Others Comp...",
    path: "others5",
    icon: GrMoney,
    element: <Others />,
  },

  {
    name: "Settings",
    rootPath: "settings",
    icon: CiSettings,
    children: [
      {
        name: "Profile",
        path: "settings/profile",
        icon: CiUser,
        element: <MyProfile />,
      },
      {
        name: "",
        path: "settings/profile/edit",
        element: <EditMyProfile />,
      },
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
