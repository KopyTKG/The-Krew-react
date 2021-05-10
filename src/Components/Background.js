
const Background = (url) => {
    const Back = url.url;
    return(
        <div style={{
            backgroundImage: `url("${process.env.PUBLIC_URL + Back}")`,
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            zIndex: -1,
            position: "absolute"
        }}>
        </div>
    );
}

export default Background;