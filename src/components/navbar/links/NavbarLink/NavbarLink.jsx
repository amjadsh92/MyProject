

import Link from "next/link"
import styles from "./NavBarLink.module.css"
//import { usePathname } from "next/navigation"
import { auth } from "@/auth"
//import { session } from "@/app/page"
import { headers } from "next/headers";

const NavLink = async ({item}) => {
   
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    const session = await auth()

   

    return  (session?.user  && (item.path === '/signin')) ? "" : <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`} > {item.title} </Link>

}

export default NavLink


 
