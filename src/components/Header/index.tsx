import { Container } from './styles'
import NavLink from "./NavLink";

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/"/>
        <NavLink title="Linkedin" path="https://www.linkedin.com/in/ismael-f-335512184/"/>
        <NavLink title="Github" path="https://github.com/ismaelfvargas"/>
      </ul>
    </Container>
  );
};

export default Header;

