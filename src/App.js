import { Provider } from "react-redux";
import Game from "./components/Game";
import Logo from "./components/Logo";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<Logo />
			<div className="container md:max-w-3xl mx-auto">
				<Game />
			</div>
		</Provider>
	);
}

export default App;
