import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setTheme } from "../../../store/states/ThemeSlice";
import styles from "./ThemeSwitch.module.css";

export default function ThemeSwitch() {
    const theme = useAppSelector((state) => state.theme.mode);

    const dispatch = useAppDispatch();

    const style = {
        backgroundColor:
            theme === "Light"
                ? "hsla(0, 0.00%, 100.00%, 0.50)"
                : "hsla(0, 0.00%, 0.00%, 0.50)",
    };

    return (
        <div
            onClick={() => {
                dispatch(
                    setTheme(
                        theme === "Light"
                            ? "Dark"
                            : "Light"
                    )
                );
            }}
            style={style}
            className={styles.ThemeDiv}
        >
            {theme == "Light" ? <Day /> : <Night />}
        </div>
    );
}

const Night = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 2048 2048"
        >
            <path
                fill="currentColor"
                d="M128 1536q141 0 272-36t244-104t207-160t161-207t103-245t37-272q0-133-34-261T1019 8q128 16 245 61t217 115t181 161t138 199t89 229t31 251q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-138 0-269-36t-246-103t-212-164T5 1528q31 4 61 6t62 2m768 384q124 0 238-32t214-90t181-140t140-181t91-214t32-239q0-136-40-263t-112-236t-176-194t-229-136q45 155 45 317q0 146-35 282t-100 258t-157 225t-205 182t-244 129t-277 68q128 128 290 196t344 68"
            />
        </svg>
    );
};

const Day = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 2048 2048"
        >
            <path
                fill="currentColor"
                d="M960 512q93 0 174 35t143 96t96 142t35 175q0 93-35 174t-96 143t-142 96t-175 35q-93 0-174-35t-143-96t-96-142t-35-175q0-93 35-174t96-143t142-96t175-35m0 768q66 0 124-25t101-68t69-102t26-125t-25-124t-69-101t-102-69t-124-26t-124 25t-102 69t-69 102t-25 124t25 124t68 102t102 69t125 25m64-896H896V0h128zM896 1536h128v384H896zm1024-640v128h-384V896zM384 1024H0V896h384zm123-426L236 326l90-90l272 271zm906 724l271 272l-90 90l-272-271zm0-724l-91-91l272-271l90 90zm-906 724l91 91l-272 271l-90-90z"
            />
        </svg>
    );
};
