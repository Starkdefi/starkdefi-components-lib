import "./styles/globals.css";
import Button from "./components/button";
import Footer from "./components/footer";
export { Button, Footer };



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
