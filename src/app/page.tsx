"use client" 
import FooterLinks from '@/components/footer';
import HowItWorks from '@/components/howitworks';
import WaitlistComponent from '@/components/modals/waitList';
import TicZeeBanner from '@/components/ticZeeBanner';
import WhyUseTicZee from '@/components/whyUseTicZee';
import WhyUseTicZeeTwo from '@/components/WhyUseTicZeeTwo';
import React,{useState} from 'react';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="font-sans">
      <TicZeeBanner  openModal={() => setModalOpen(true)} ></TicZeeBanner>
      <WhyUseTicZee></WhyUseTicZee>
      <WhyUseTicZeeTwo></WhyUseTicZeeTwo>
      <HowItWorks></HowItWorks>
      <FooterLinks></FooterLinks>
      <WaitlistComponent isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
    </div>
      
  );
};

export default App;
