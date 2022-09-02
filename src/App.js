import { Provider } from "react-redux";
import Game from "./components/Game";
import Logo from "./components/Logo";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="container mx-auto py-8">
				<Logo />
				<Game />
			</div>
		</Provider>
	);
}

export default App;
