import React from "react";
import styled from "styled-components";

const UserButon = styled.button`
    background-color: blue;
    width: 60px;
    height: 60px;

    border-radius: 100%;
`

function UserButton() {
    return ( 
        <UserButon>.</UserButon>
     );
}

export default UserButton;