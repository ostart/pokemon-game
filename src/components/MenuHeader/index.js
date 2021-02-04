import Menu from "../Menu";
import NavBar from "../NavBar";
import { useState } from 'react';

const MenuHeader = () => {
    const [isActive, setActive] = useState(false);
    return (
        <>
            <Menu isActive={isActive} />
            <NavBar isActive={isActive} setActive={setActive} />
        </>
    );
};

export default MenuHeader;