import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo com fundo rosa a esquerda e ao lado escrito React Avançado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustração de uma pessoa desenvolvedora sentada de frente para o computador vendo códigos"
    />
  </S.Wrapper>
)

export default Main
