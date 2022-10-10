import React from "react";

const Layout = (props) => {
  return (
    <>
      {/* <Menu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        refOpener={refMenuOpener}
      /> */}
      <view main="">
        <view>{props.children}</view>
      </view>
    </>
  );
};

export default Layout;
