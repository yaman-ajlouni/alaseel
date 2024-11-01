import { Provider } from "react-redux";
import { WhiteNavBar } from "./components/white-navbar/WhiteNavBar";
import { AppRoutes } from "./routes/AppRoutes";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <WhiteNavBar /> */}
        <AppRoutes />
      </Provider>
    </div >
  );
}

export default App;
