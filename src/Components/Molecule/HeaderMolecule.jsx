import React from "react";
import styled from "styled-components";

import Logo from "../Atoms/LogoAtom";
import UserButton from "../Atoms/ButtonUserAtom";

const HeaderMain = styled.div`
width: 100%;
background-color: red;

display: flex;
justify-content: space-between;
align-items: center;
`;

function Header() {
    return ( 
        <HeaderMain>
            <Logo />
            <UserButton />
        </HeaderMain>
     );
}

export default Header;