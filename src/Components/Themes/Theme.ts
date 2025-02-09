
/**
 * 
 * @returns Returns Either "Dark" or "Light" Depending on the user's preferred system color.
 */
export const useTheme = (): "Dark" | "Light" => {
    // Do a function that gets the user's preferred theme.

    // For the time being this is going to return Dark as default

    return "Dark"
}


type ColorsTypes = {
    [key: string]: {
        backgroundColor: string;
        textColor: string;
        accentColor: string;
        secondaryColor: string;
    }
}
export const Colors: ColorsTypes = {
    "Dark": {
        backgroundColor: "#0e0e0e",
        textColor: "#fff",
        accentColor: "#fff",
        secondaryColor: "#fff"
    },
    "Light": {
        backgroundColor: "#fff",
        textColor: "#0e0e0e",    
        accentColor: "#0e0e0e",
        secondaryColor: "#0e0e0e"
    }
}