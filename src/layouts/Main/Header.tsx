import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";

import { IoIosNotificationsOutline } from "react-icons/io";
// import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  // const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full h-[88px] flex justify-between items-center rounded-sm py-[16px] px-[32px] bg-primary shadow-sm relative z-50">
      <div className="text-start space-y-0.5">
        <p className="text-[24px] font-medium text-white">
          {/* {"Welcome,"} {user?.name || "Admin"} */}
          {"Welcome,"} {"Admin"}
        </p>
        <p className="text-gray-50">{"Have a nice day!"}</p>
      </div>
      <div className="flex justify-center items-center gap-x-6">
        <>
          <IoIosNotificationsOutline
            onClick={() => navigate("/notifications")}
            style={{ cursor: "pointer" }}
            className={`border border-white min-w-[40px] min-h-[40px] rounded-lg p-1.5 shadow-sm text-white group-hover:bg-[#b3dfc7]`}
          />
        </>
        <div
          onClick={(e) => navigate("/settings/profile")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Avatar
            size={42}
            // icon={
            //   <img
            //     src={
            //       user?.image
            //         ? `${import.meta.env.VITE_IMAGE_URL}` + user?.image
            //         : profileImage
            //     }
            //     alt=""
            //     className="w-full h-full object-cover"
            //   />
            // }
            icon={"img"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
