import Link from "next/link"

const NavBar = ()=> {
    return  (
        <ul style={{display:'flex',gap: '20px'}}>
            <Link href={'/'}>
        <li>
            Home
        </li>
        </Link>
        <Link href={'/about'}>
        <li>
            About
        </li>
        </Link>
            <Link href={'/services'}>
        <li>
            Services
        </li>
        </Link>
        </ul>
    )
}


export default NavBar;