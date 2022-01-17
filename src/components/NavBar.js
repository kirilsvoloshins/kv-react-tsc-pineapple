import { StyledNavBar } from "./styled/NavBar.styled"
import { NavLinks } from "./styled/NavLinks.styled"
import PineappleLogo from "./PineappleLogo.js"

export default function NavBar() {
    return (
        <StyledNavBar>
            <PineappleLogo />
            <NavLinks>
                <a href="#">About</a>
                <a href="#">How it works</a>
                <a href="#">Contact</a>
            </NavLinks>
        </StyledNavBar>
    )
}
