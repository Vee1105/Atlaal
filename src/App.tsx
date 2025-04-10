import { lazy } from "react";
import "./App.css";
import { Colors } from "./Components/Themes/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/Home/Home"));
const NotFound = lazy(() => import("./pages/404NotFound/NotFound"));  
const Opening2025 = lazy(() => import("./pages/Opening2025/Opening2025"));  
import { useAppSelector } from "./store/hooks";

function App() {
    const theme = useAppSelector((state) => state.theme.mode);

    const Color = Colors[`${theme}`];

    const ParentThemeStyle = {
        backgroundColor: Color?.backgroundColor,
        color: Color?.textColor.default,
        transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
    };
    return (
        <div style={ParentThemeStyle} className="ParentDiv">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="opening-2025" element={<Opening2025 />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
