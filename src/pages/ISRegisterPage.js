import React, { useState, useEffect } from 'react';
import ISInfo from '../components/ISRegister/ISInfo';
import ISRegister1 from '../components/ISRegister/ISRegister1';
import ISRegister2 from '../components/ISRegister/ISRegister2';
import ISRegister3 from '../components/ISRegister/ISRegister3';
import ISRegister4 from '../components/ISRegister/ISRegister4';
import ISRegister5 from '../components/ISRegister/ISRegister5';
import '../assets/ISRegisterPage/ISRegisterPage.css';

function ISRegisterPage() {
    const [formData, setFormData] = useState({
        totalInterestRate: 7.00,
        account: '',
        agreements: {}
    });
    const [step, setStep] = useState(0);

    useEffect(() => {
        console.log('FormData updated:', formData);
    }, [formData]);

    const nextStep = () => {
        // 이 부분이 문제 해결을 위한 핵심 부분입니다.
        setFormData((prevData) => {
            const updatedData = { ...prevData };
            console.log('Moving to next step with data:', updatedData);
            return updatedData;
        });

        setTimeout(() => {
            setStep(prevStep => prevStep + 1);
        }, 0);
    };

    const prevStep = () => {
        setStep(prevStep => (prevStep > 0 ? prevStep - 1 : 0));
    };

    const handleSetFormData = (newData) => {
        setFormData(prevData => ({
            ...prevData,
            ...newData,
        }));
    };

    console.log('Current Step:', step);
    console.log('Current Form Data:', formData);

    switch (step) {
        case 0:
            return <ISInfo nextStep={nextStep} />;
        case 1:
            return (
                <ISRegister1
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={handleSetFormData}
                />
            );
        case 2:
            return (
                <ISRegister2
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={handleSetFormData}
                />
            );
        case 3:
            return (
                <ISRegister3
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={handleSetFormData}
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