import { useState } from 'react';
import { Home as HomeIcon, Video } from 'lucide-react';

export default function Step1Modalidad({ fisio, data, onNext }: any) {
  const [modalidad, setModalidad] = useState(data.modalidad || '');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-[#0A1E3D]">Elige la modalidad</h2>
        <p className="text-slate-500 text-sm mt-1">¿Cómo prefieres tu sesión?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          disabled={!fisio?.ofrece_domicilio}
          onClick={() => setModalidad('domicilio')}
          className={`p-6 rounded-2xl border-2 text-left transition-all ${
            !fisio?.ofrece_domicilio ? 'opacity-50 cursor-not-allowed border-slate-100 bg-slate-50' :
            modalidad === 'domicilio' ? 'border-[#1A5C3A] bg-[#f0f9f4]' : 'border-slate-200 hover:border-[#1A5C3A]/50'
          }`}
        >
          <HomeIcon className={`h-8 w-8 mb-4 ${modalidad === 'domicilio' ? 'text-[#1A5C3A]' : 'text-[#0A1E3D]'}`} />
          <h4 className="font-bold text-[#0A1E3D] mb-1">A domicilio</h4>
          <p className="text-xs text-slate-500">El fisio va a tu casa en Lima.</p>
          {!fisio?.ofrece_domicilio && <p className="text-[10px] text-red-400 mt-2 font-medium">No disponible por este profesional</p>}
        </button>

        <button
          disabled={!fisio?.ofrece_videollamada}
          onClick={() => setModalidad('videollamada')}
          className={`p-6 rounded-2xl border-2 text-left transition-all ${
            !fisio?.ofrece_videollamada ? 'opacity-50 cursor-not-allowed border-slate-100 bg-slate-50' :
            modalidad === 'videollamada' ? 'border-[#1A5C3A] bg-[#f0f9f4]' : 'border-slate-200 hover:border-[#1A5C3A]/50'
          }`}
        >
          <Video className={`h-8 w-8 mb-4 ${modalidad === 'videollamada' ? 'text-[#1A5C3A]' : 'text-[#0A1E3D]'}`} />
          <h4 className="font-bold text-[#0A1E3D] mb-1">Videollamada</h4>
          <p className="text-xs text-slate-500">Sesión online desde donde estés.</p>
          {!fisio?.ofrece_videollamada && <p className="text-[10px] text-red-400 mt-2 font-medium">No disponible por este profesional</p>}
        </button>
      </div>

      <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
        <button 
          onClick={() => onNext({ modalidad })}
          disabled={!modalidad}
          className="bg-[#6B8A9E] hover:bg-[#5a7689] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar →
        </button>
      </div>
    </div>
  );
}
