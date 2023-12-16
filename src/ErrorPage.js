import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <img src="./images/404-error.svg" alt="error" />
          <h2>We couldn't find the page you were looking for</h2>
          <p>Please ensure you have the correct URL or return to homepage.</p>

          <NavLink to="/">
            <Button>HomePage</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 5rem 0;
    text-align: center;

    img {
      height: 35rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;