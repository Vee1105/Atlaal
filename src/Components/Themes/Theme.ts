import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setTheme } from "../../store/states/ThemeSlice";

export let Theme = "Dark";

export const getTheme = (): "Dark" | "Light" | "Midnight" => {
    let theme: string | null = localStorage.getItem("theme");
    if (theme === null) {
        // get user preference
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        localStorage.setItem("theme", mediaQuery.matches ? "Dark" : "Light");
        theme = mediaQuery.matches ? "Dark" : "Light";
    }
    Theme = theme;
    if (theme === "Dark" || theme === "Light" || theme === "Midnight") {
        return theme;
    }
    return "Dark";
};

export const SwitchTheme = () => {
    const theme = useAppSelector(state => state.theme.mode);
    console.log(theme);
    const dispatch = useAppDispatch();
    localStorage.setItem("override", "true");
    dispatch(setTheme(theme === "Light" ? "Dark" : theme === "Dark" ? "Midnight" : "Light"));
};

export type ColorsTypes = {
    [key: string]: {
        backgroundColor: string;
        textColor: {
            default: string;
            title: string;
            subtitle: string;
            body: string;
            caption: string;
            button: string;
            news: string;
        };
        accentColor: string;
        secondaryColor: string;
    };
};
export const Colors: ColorsTypes = {
    Dark: {
        backgroundColor: "#0e0e0e",
        textColor: {
            default: "#fff",
            title: "#fff",
            subtitle: "hsla(0, 20%, 95%, 0.9)",
            body: "#fff",
            caption: "hsla(0, 30%, 100%, 0.8)",
            button: "#fff",
            news: "hsla(0, 0.00%, 95.50%, 0.7)",
        },
        accentColor: "hsl(205, 20%, 50%)",
        secondaryColor: "#fff",
    },
    Light: {
        backgroundColor: "#fff",
        textColor: {
            default: "hsl(0, 0.00%, 5.50%)",
            title: "rgba(14, 14, 14, 1)",
            subtitle: "hsla(0, 20%, 5%, 0.9)",
            body: "rgba(14, 14, 14, 1)",
            caption: "hsla(0, 30%, 0%, 0.8)",
            button: "#fff",
            news: "hsla(0, 0.00%, 5.50%, 0.7)",
        },
        accentColor: "hsl(205, 20%, 50%)",
        secondaryColor: "#0e0e0e",
    },
};
