import cart from "../assets/cart.png"

const styles = {
    img: {
        height: "2rem",
        width: "auto",
        color: "white"
    },
    span: {
        color:"white",
        paddingLeft: 10,
    }
}

export const CartWidgets = () => (
    <>
        <img src={cart} style={styles.img} alt="changuito" />
        <span style={styles.span}>0</span>
    </>
)