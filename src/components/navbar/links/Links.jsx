const { default: Link } = require("next/link")
import NavLink from "./NavbarLink/NavbarLink"
import styles from "./links.module.css"




const Links = () => {


    

const links = [
    {title:"Homepage",
        path:"/"},
    {title:"to-do-app",
    path:"/toDoApp"},
    {title:"tic-tac-toe",
    path:"/TicTacToe"},
    

    
]


return(
    <div className={styles.links}>
        {links.map((link) => 
        <NavLink item={link} key={link.title} />
        )}

    
 
    </div>


)

        }


        
export default Links
