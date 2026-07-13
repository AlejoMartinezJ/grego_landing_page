import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Problem from '../../components/Problem';
import About from '../../components/About';
import Analogies from '../../components/Analogies';
import Features from '../../components/Features';
import ValidatedCase from '../../components/ValidatedCase';
import UseCases from '../../components/UseCases';
import Roadmap from '../../components/Roadmap';
import Research from '../../components/Research';
import Impact from '../../components/Impact';
import Institutions from '../../components/Institutions';
import Team from '../../components/Team';
import Footer from '../../components/Footer';

export const LandingPageV2 = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <About />
        <Analogies />
        <Features />
        <ValidatedCase />
        <UseCases />
        <Roadmap />
        <Research />
        <Impact />
        <Institutions />
        <Team />
      </main>
      <Footer />
    </>
  );
};
