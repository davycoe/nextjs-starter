import styled from "styled-components";

const Title = styled.h1`
  font-size: 32rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const HomePage = () => (
  <>
    <Title>Welcome to Next.js!</Title>
  </>
);

export default HomePage;
