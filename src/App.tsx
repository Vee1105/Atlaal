import { useEffect } from "react";
import "./App.css";
import Text from "./Components/Text/Text";

function App() {
	function mousePosition(event: MouseEvent) {
		const circle = document.getElementById("circle");
		if (circle) {
			setTimeout(() => {
				circle.style.left = event.clientX - 50 + "px";
				circle.style.top = event.clientY - 50 + "px";
			}, 100);
		}
	}

	function mouseOut() {
		const circle = document.getElementById("circle");
		if (circle) {
			circle.style.opacity = "0";
		}
	}

	function mouseEnter() {
		const circle = document.getElementById("circle");
		if (circle) {
			circle.style.opacity = "1";
		}
	}

	useEffect(() => {
		const parentDiv = document.getElementById("parentDiv");
		console.log(parentDiv);
		window.addEventListener("mousemove", mousePosition);
		parentDiv?.addEventListener("mouseleave", mouseOut);
		parentDiv?.addEventListener("mouseenter", mouseEnter);
		return () => {
			window.removeEventListener("mousemove", mousePosition);
			parentDiv?.removeEventListener("mouseleave", mouseOut);
			parentDiv?.removeEventListener("mouseenter", mouseEnter);
		};
	}, []);
	return (
		<>
			<div id="circle" className="darkCircle"></div>
			<div id="parentDiv" className="ParentDiv">
				<div
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						display: "flex",
					}}
				>
					Home
					<Text text="This is a title" type="title" />
					<Text text="This is a subtitle" type="subtitle" />
					<Text text="This is a bodytext" type="body" />
					<Text text="This is a caption" type="caption" />
					<Text text="This is a default" />
				</div>
			</div>
		</>
	);
}

export default App;
