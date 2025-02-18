import "./App.css";
import { Colors } from "./Components/Themes/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
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
