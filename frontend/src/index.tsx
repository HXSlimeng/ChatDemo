import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/index";
import { utilsContext } from "./provider/utils";
import "./App.scss";
import dayjs from "dayjs";
import { Provider } from "react-redux";
import store from "./store";
//全局增加滚动条样式
document.body.classList.add("semi-light-scrollbar");
const root = ReactDOM.createRoot(document.getElementById("root")!);
document.body.setAttribute("theme-mode", "dark");
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <utilsContext.Provider value={dayjs}>
      <RouterProvider router={router}></RouterProvider>
    </utilsContext.Provider>
  </Provider>
  // </React.StrictMode>
);
