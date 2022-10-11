import { Dropdown, Menu } from "antd";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";

const ContextMenu = () => {
  //let navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const onContextMenuClick = ({ key }) => {
    switch (key) {
      case "0":
        //dispatch(setIsProfileOpen(true));
        setVisible(false);
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu
      className="main_list"
      onClick={onContextMenuClick}
      items={[
        {
          label: "Profile",
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: "Edit Profile",
          key: "2",
        },
        {
          label: "Account Settings",
          key: "3",
        },
        {
          label: "My Likes",
          key: "4",
        },
        {
          label: "Sign Out",
          key: "5",
        },
      ]}
    />
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        open={visible}
        onOpenChange={handleVisibleChange}
      >
        <div className="button mini rounded">
          <icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </icon>
        </div>
      </Dropdown>
    </>
  );
};

export default ContextMenu;
