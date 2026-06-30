import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import About from './components/About';
import Analogies from './components/Analogies';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Roadmap from './components/Roadmap';
import Research from './components/Research';
import Impact from './components/Impact';
import Institutions from './components/Institutions';
import Team from './components/Team';
import Footer from './components/Footer';
import { EmergencyModal } from './components/emergency/EmergencyModal';
import { useEmergencyModal } from './hooks/useEmergencyModal';

function App() {
  const emergencyMode = import.meta.env.VITE_EMERGENCY_MODE === 'true';
  const emergencyId   = import.meta.env.VITE_EMERGENCY_EVENT_ID ?? '';
  const { isOpen, openModal, closeModal } = useEmergencyModal(emergencyId);

  return (
    <>
      {emergencyMode && (
        <EmergencyModal isOpen={isOpen} onClose={closeModal} />
      )}
      <Header onOpenEmergency={openModal} showEmergencyBtn={emergencyMode} />
      <main>
        <Hero />
        <Problem />
        <About />
        <Analogies />
        <Features />
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
}

export default App;
