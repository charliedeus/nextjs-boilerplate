import {
 Wrapper, Logo, Title, Description, Illustration
} from './styles';

const Main = () => (
  <Wrapper>
    <Logo
      src="/images/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <Title>React Avançado</Title>
    <Description>TypeScript, ReactJS, NextJS e Styled Components</Description>
    <Illustration
      src="/images/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </Wrapper>
);

export default Main;
