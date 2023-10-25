// import * as React from "react";
// import { render } from "react-dom";
import { community_wall_backend } from "../../declarations/community_wall_backend";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "create",
		element: <CreatePost />,
	},
]);
ReactDOM.createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
