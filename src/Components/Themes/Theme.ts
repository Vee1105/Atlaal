export const getTheme = (): "Dark" | "Light" => {
    const theme: string | null = localStorage.getItem("theme");
    if (theme === null){
        // get user preference
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        localStorage.setItem("theme", mediaQuery.matches ? "Dark" : "Light");
        return mediaQuery.matches ? "Dark" : "Light";
    };
    return theme === "Light" ? theme : "Dark";
}

export type ColorsTypes = {
    [key: string]: {
        backgroundColor: string;
        textColor: {
            default: string;
            title: string;
            subtitle: string;
            body: string;
            caption: string;
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
        },
        accentColor: "#fff",
        secondaryColor: "#fff",
    },
    Light: {
        backgroundColor: "#fff",
        textColor: {
            default: "#0e0e0e",
            title: "#0e0e0e",
            subtitle: "hsla(0, 20%, 5%, 0.9)",
            body: "#0e0e0e",
            caption: "hsla(0, 30%, 0%, 0.8)",
        },
        accentColor: "#0e0e0e",
        secondaryColor: "#0e0e0e",
    },
};
