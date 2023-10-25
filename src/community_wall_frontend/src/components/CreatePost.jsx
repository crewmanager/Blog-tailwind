import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	const navigator = useNavigate();
	function savePost() {
		navigator("../");
		// TODO: Send Post to Backend and Save it
	}
	return (
		<main>
			<Header isCreatePostPage={true} handlerFunction={savePost} />
			<div className="my-5">
				<div className="my-2">
					<label>
						Post Title
						<br />
						<input
							type="text"
							name="title"
							onChange={(e) => setTitle(e.target.value)}
							className="text-black"
						/>
					</label>
				</div>
				<div className="my-2">
					<label>Post Description</label>
					<textarea
						name="content"
						className="w-full min-h-[300px] text-black"
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
			</div>
		</main>
	);
}
