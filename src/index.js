import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages";
import { Spin } from "antd";
import register, { unregister } from "./registerServiceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
const loading = (
  <div style={{ margin: "25% auto" }}>
    <Spin size="large" />
  </div>
);

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/
var _toString = Object.prototype.toString;
// toString override added to prototype of Foo class
Object.prototype.toString = function () {
  try {
    switch (this.tagName) {
      case "LOGIN":
      case "CONT":
      case "MESSAGE":
      case "VIEW":
      case "ICON":
      case "SEPARATOR":
      case "LOGO":
      case "INFO":
      case "CONTAINER":
      case "HORIZONAL_WRAP":
      case "CONTENT_WRAP":
      case "TEXT":
      case "CHECK":
      case "BOX":
      case "WRAP":
      case "LIST":
      case "ITEM":
      case "OVERLAY":
      case "GRID":
      case "SCROLLER":
      case "BLOCK":
      case "SPACE":
      case "PICTURE":
      case "DEMOSPACE":
      case "NAME":
      case "BADGE":
      case "GROUP":
      case "DASHBOARD":
      case "SWITCH":
      case "SWITCHABLE":
      case "PLAYER":
      case "PLAYLIST":
      case "MEDIA":
      case "CIRCLE":
      case "LINE":
      case "ROW":
      case "INFOBAR":
      case "THUMB":
      case "DETAIL":
      case "COVER":
      case "CONTROLS":
      case "DECOR":
      case "DOT":
      case "GAP":
      case "PIE":
      case "TIP":
      case "COL":
      case "COUNT":
      case "TEST":
      case "ZONE":
      case "LAYOUT":
      case "TAG":
      case "ACTION":
      case "ELASTIC":
      case "TOOLBAR":
      case "PANEL":
      case "WRAPPER":
      case "DEMO_WRAP":
      case "APPLICATION":
      case "THUMBS":
      case "POINT":
      case "HOLDER":
      case "COLORPICKER":
      case "ALERT":
      case "BACK":
      case "SERVICE":
      case "PARTNER":
      case "SLIDE":
      case "SLIDER":
      case "AVATAR":
      case "PROFILE":
      case "BORDER":
      case "CONTENT":
        return "[object div]";
      default:
        break;
    }
  } catch {}
  return _toString.call(this);
};
unregister();

root.render(
  <Suspense fallback={loading}>
    <BrowserRouter basename={baseUrl}>
      <AppRoutes />
    </BrowserRouter>
  </Suspense>
);

register();
