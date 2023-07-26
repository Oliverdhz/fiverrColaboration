import Link from 'next/link';
import tw from 'twin.macro';
import AnimationRevealPage from "./../helpers/AnimationRevealPage";
import Header from "./../components/headers/Light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";

const Container = tw.div`
  h-[90vh] flex flex-col items-center justify-center max-w-xl mx-auto
`;

const Title = tw.h1`
  text-3xl font-bold mb-4 text-center md:text-4xl
`;

const Description = tw.p`
  text-lg text-center
`;

const BackButton = tw.button`
  mt-8 px-6 py-4 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700
`;

export default function Custom404() {
  return (
    <AnimationRevealPage>
    <Header />
    <Container>
      <Title>404 - Pagina no encontrada :(</Title>
      <Description>
        Lo siento, la pagina que usted busca no ha sido encontrada.
      </Description>
      <Link href="/">
        <BackButton>Volver a Inicio</BackButton>
      </Link>
    </Container>
    <Footer/>
    </AnimationRevealPage>
  );
}
