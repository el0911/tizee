"use client"
import FooterLinks from '@/components/footer';
import HowItWorks from '@/components/howitworks';
import HowItWorksHosts from '@/components/howitworks_host';
import HowItWorksParticipants from '@/components/howitworks_participants';
import WaitlistComponent from '@/components/modals/waitList';
import TicZeeBanner from '@/components/ticZeeBanner';
import WhyUseTicZee from '@/components/whyUseTicZee';
import WhyUseTicZeeTwo from '@/components/WhyUseTicZeeTwo';
import React, { useState } from 'react';

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="font-sans"  style={{
            height: '100vh',
            width: '100vw',
            background: '#1c1c1c',
            paddingTop: '100px'
        
        }}>
            <HowItWorksParticipants openModal={() => setModalOpen(true)}  ></HowItWorksParticipants>
            {/* <FooterLinks></FooterLinks> */}
            <WaitlistComponent isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
        </div>

    );
};

export default App;
