import React from 'react';
import ISInfo from '../components/ISRegister/ISInfo';
import ISRegister1 from '../components/ISRegister/ISRegister1';
import ISRegister2 from '../components/ISRegister/ISRegister2';
import ISRegister3 from '../components/ISRegister/ISRegister3';
import ISRegister4 from '../components/ISRegister/ISRegister4';
import ISRegister5 from '../components/ISRegister/ISRegister5';
import '../assets/ISRegisterPage/ISRegisterPage.css';

function ISRegisterPage({ step, nextStep, prevStep, formData }) {
    switch (step) {
        case 0:
            return <ISInfo nextStep={nextStep} />;
        case 1:
            return (
                <ISRegister1
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                />
            );
        case 2:
            return (
                <ISRegister2
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                />
            );
        case 3:
            return (
                <ISRegister3
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                />
            );
        case 4:
            return (
                <ISRegister4
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                />
            );
        case 5:
            return <ISRegister5 formData={formData} />;
        default:
            return <ISInfo nextStep={nextStep} />;
    }
}

export default ISRegisterPage;
