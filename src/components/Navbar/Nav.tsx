import { NavLink } from 'react-router-dom';
import cl from './nav.module.scss';

type NavLinkRenderProps = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

const Nav = () => {

    const navStyle = ({ isActive }: NavLinkRenderProps) =>
    isActive ? cl.active : cl.nav_link
    
    return (
        <nav className={cl.container}>
            <NavLink
                className={navStyle}
                to={'/page1'}>page1</NavLink>
            <NavLink
                className={navStyle}
                to={'/page2'}>page2</NavLink>
        </nav>
    )
}

export default Nav;