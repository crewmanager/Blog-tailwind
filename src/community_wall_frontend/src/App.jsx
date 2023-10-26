import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import { community_wall_backend } from "../../declarations/community_wall_backend";

function App() {
	const [posts, setPosts] = useState([]);

	async function getAllPosts() {
		const res = await community_wall_backend.getPosts();
		setPosts(res);
	}
	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<>
			<MyContext.Provider value={(posts, setPosts)}>
				<main>
					<Header />

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
						{posts?.map((post, index) => (
							<Card post={post} key={index} id={index} />
						))}
					</div>
				</main>
			</MyContext.Provider>
		</>
	);
}

export default App;
