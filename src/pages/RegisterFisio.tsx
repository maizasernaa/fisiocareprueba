import { useState } from 'react';
import { Activity } from 'lucide-react';
import Step1Datos from '../components/registro-fisio/step1Datos';
import Step2Profesional from '../components/registro-fisio/step2Profesional';
import Step3Atencion from '../components/registro-fisio/step3Atencion';
import Step4Documentos from '../components/registro-fisio/step4Documentos';

export default function RegistroFisio() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => s - 1);

  // Pasos para la barra de progreso
  const steps = ['Datos', 'Profesional', 'Atención', 'Documentos'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Parte superior con Logo, Título y Barra de pasos */}
        <div className="text-center mb-10">
          <Activity className="mx-auto h-8 w-8 text-[#0A1E3D] mb-4" />
          <h1 className="text-3xl font-bold text-[#0A1E3D]">Únete como profesional</h1>
          <p className="text-slate-500 mt-2 font-medium">Completa tu perfil para empezar a recibir pacientes</p>
        </div>

        {/* Barra de Pasos igual a la segunda imagen */}
        <div className="flex items-center justify-between mb-10 px-4 md:px-12 relative">
          {/* Línea conectora de fondo */}
          <div className="absolute top-5 left-12 right-12 h-[2px] bg-slate-200 -z-0" />
          
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            const isActive = step === stepNumber;
            const isCompleted = step > stepNumber;
            
            return (
              <div key={label} className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors
                  ${isCompleted ? 'bg-[#1A5C3A] border-[#1A5C3A] text-white' : 
                    isActive ? 'bg-[#1A5C3A] border-[#1A5C3A] text-white' : 'bg-white border-slate-300 text-slate-400'}`}>
                  {isCompleted ? '✓' : stepNumber}
                </div>
                <span className={`text-sm mt-2 font-semibold ${isActive || isCompleted ? 'text-[#0A1E3D]' : 'text-slate-400'}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Contenedor del formulario */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          {step === 1 && <Step1Datos onNext={handleNext} />}
          {step === 2 && <Step2Profesional onNext={handleNext} onBack={handleBack} />}
          {step === 3 && <Step3Atencion onNext={handleNext} onBack={handleBack} />}
          {step === 4 && <Step4Documentos formData={formData} onBack={handleBack} />}
        </div>
      </div>
    </div>
  );
}