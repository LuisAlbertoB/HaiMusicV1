import React from "react";
import styled from "styled-components";

const LogoMain = styled.div`
    width: 303px;
    height: 96px;
    background-color: black;
    color: white;
    `;


function Logo() {
    return ( 
        <LogoMain>
            <p>HaiMusic</p>
        </LogoMain>
     );
}

export default Logo;