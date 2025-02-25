type PanelProps = {
    children: React.ReactNode;
    images: string[] | string;
    style?: React.CSSProperties;
    Direction: "left" | "right" | "top" | "bottom";
};

export default function MultiImagePanel({
    children,
    images,
    style,
    Direction = "right",
}: PanelProps) {
    const Images = ({ images }: { images: PanelProps["images"] }) => {
        const styles = {
            display: "flex",
            justifyContent: "center",
            width: Direction === "top" || Direction === "bottom" ? "95%" : "60%",
            height: "100%",
            gap: "10px",
        };

        if (Array.isArray(images)) {
            const count = images.length;
            const width = 100 / count;
            return (
                <div style={styles}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            style={{
                                width: width + "%",
                                height: "100%",
                                objectFit: "cover",
                                opacity: "1",
                                position: "relative",
                                marginTop: index % 2 === 0 ? "0px" : "20px",
                            }}
                        />
                    ))}
                </div>
            );
        } else {
            return (
                <img
                    src={images}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: "1",
                        position: "relative",
                    }}
                />
            );
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent:
                    Direction === "left" || Direction === "right"
                        ? "center"
                        : "center",
                alignItems: "center",
                height: 800,
                gap: "100px",
                flexDirection:
                    Direction === "left"
                        ? "row-reverse"
                        : Direction === "top"
                        ? "column-reverse"
                        : Direction === "bottom"
                        ? "column"
                        : "row",
                ...style,
            }}
        >
            <Images images={images} />
            <div
                style={{
                    width:
                        Direction === "top" || Direction === "bottom"
                            ? "100%"
                            : "20%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {children}
            </div>
        </div>
    );
}
