import "./App.css";
import { useEffect, useState } from "react";
import { Colors, getTheme } from "./Components/Themes/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
    const [theme, setTheme] = useState<"Dark" | "Light" | "Midnight">("Dark");

    const Color = Colors[`${theme}`];

    const systemTheme = getTheme();

    useEffect(() => {
        console.log(theme);
        if (localStorage.getItem("override") === "true") {
            setTheme(localStorage.getItem("theme") as "Dark" | "Light");
        } else {
            setTheme(systemTheme);
        }
    }, [theme, systemTheme]);

    const ParentThemeStyle = {
        backgroundColor: Color?.backgroundColor,
        color: Color?.textColor.default,
        transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
    };

    return (
        <>
            <div style={ParentThemeStyle} className="ParentDiv">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
