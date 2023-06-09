import "./styles/globals.css";
import Button from "./components/button";
import Footer from "./components/footer";
import theme from "./components/theme";
import * as Utils from "./utils";
export { Button, Footer, Utils, theme };

if (process.env.NODE_ENV === "development") {
  Promise.all([import("react"), import("react-dom"), import("./App")]).then(
    ([{ default: React }, { default: ReactDOM }, { App }]) => {
      const rootElement = document.getElementById("root");
      if (rootElement) {
        ReactDOM.render(React.createElement(App), rootElement);
      }
    }
  );
}
