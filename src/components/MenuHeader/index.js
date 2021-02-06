import Menu from "../Menu";
import NavBar from "../NavBar";
import { useState } from 'react';

const MenuHeader = ({bgActive}) => {
    const [isActive, setActive] = useState(null);
    return (
        <>
            <Menu isActive={isActive} setActive={setActive} />
            <NavBar isActive={isActive} bgActive={bgActive} setActive={setActive} />
        </>
    );
};

export default MenuHeader;