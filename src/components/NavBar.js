import { StyledNavBar } from "./components/styled/NavBar.styled";
import PineappleLogo from "./components/PineappleLogo"


export default function NavBar() {
    return (
        <StyledNavBar>
            <PineappleLogo />
            <div className="nav-links">
                <a href="#">About</a>
                <a href="#">How it works</a>
                <a href="#">Contact</a>
            </div>
        </StyledNavBar>
    )
}
