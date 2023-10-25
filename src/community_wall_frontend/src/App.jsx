import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
	const [posts, setPosts] = useState([]);
	return (
		<>
			<MyContext.Provider value={(posts, setPosts)}>
				<main>
					<Header />

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</main>
			</MyContext.Provider>
		</>
	);
}

export default App;
