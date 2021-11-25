import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const NavBar = styled.nav`
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem 1.5rem;
    background-color: white;
    ${breakpoint('tablet')`
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
      align-items: baseline;
    `}
  `
const HomeDiv = styled.div`
    margin-bottom: 0;
    ${breakpoint('tablet')`
      margin-bottom: 0.5rem;
    `}
  `

const Home = styled.a`
    font-size: 1.5rem;
    line-height: 2rem;
    text-decoration: none;
    --tw-text-opacity: 1;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
    &:hover {
      --tw-text-opacity: 1;
      color: rgba(29, 78, 216, var(--tw-text-opacity));
    }
  `

const NavLink = styled.a`
    text-decoration: none;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-left: 0.5rem;
    --tw-text-opacity: 1;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
    &:hover {
      --tw-text-opacity: 1;
      color: rgba(29, 78, 216, var(--tw-text-opacity));
    }
  `

function Nav() {
  return (
    <NavBar>
      <HomeDiv>
        <Home href="/home">Styled Components</Home>
      </HomeDiv>
      <div>
        <NavLink href="/one">One</NavLink>
        <NavLink href="/two">Two</NavLink>
        <NavLink href="/three">Three</NavLink>
      </div>
    </NavBar>
  );
}

export default Nav;