import "./App.css";
import Text from "./Components/Text/Text";
import MouseCircle from "./Components/MouseCircle/MouseCircle";
import { useEffect, useState } from "react";
import { Colors, getTheme } from "./Components/Themes/Theme";

function App() {
    const [theme, setTheme] = useState<"Dark" | "Light">(
        localStorage.getItem("theme") as "Dark" | "Light"
    );
    const [override, setOverride] = useState<boolean>(false);
    const [color, setColors] = useState<"Dark" | "Light">("Dark");
    const Color = Colors[`${color}`];

    const systemTheme = getTheme();

    const parentDiv = document.getElementById("parentDiv");

    useEffect(() => {
        console.log(theme);
        if (override) {
            localStorage.setItem("theme", theme);
            localStorage.setItem("override", "true");
            setTheme(localStorage.getItem("theme") as "Dark" | "Light");
            setColors(theme);
        } else {
            setColors(systemTheme);
        }
    }, [theme, override, systemTheme]);

    const ThemeToggle = () => {
        return (
            <a
                onClick={() => {
                    setTheme(theme === "Dark" ? "Light" : "Dark");
                    setOverride(true);
                    localStorage.setItem("override", "true");
                }}
            >
                {localStorage.getItem("theme")
                    ? localStorage.getItem("theme")
                    : getTheme()}
            </a>
        );
    };

    return (
        <>
            <MouseCircle parentDiv={parentDiv} />
            <div
                id="parentDiv"
                className="ParentDiv"
                style={{
                    transition:
                        "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
                    backgroundColor: `${Color?.backgroundColor}`,
                    color: `${Color?.textColor.default}`,
                }}
            >
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
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}

export default App;
