import "./styles/globals.css";
export * from "./components/button";
export * from "./components/footer";

if (process.env.NODE_ENV === "development") {
  Promise.all([
    import("react"),
    import("react-dom"),
    import("./App"),
  ]).then(([{ default: React }, { default: ReactDOM }, { App }]) => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      ReactDOM.render(React.createElement(App), rootElement);
    }
  });
}
