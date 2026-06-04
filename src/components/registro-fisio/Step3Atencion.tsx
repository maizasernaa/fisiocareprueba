import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function Step3Atencion({ onNext, onBack }: any) {
  const [distritos, setDistritos] = useState<{ id: number; nombre: string }[]>([]);
  const [data, setData] = useState({
    ofrece_domicilio: false,
    ofrece_videollamada: false,
    distritos_seleccionados: [] as string[],
    precio_sesion: ''
  });

  useEffect(() => {
    async function fetchDistritos() {
      const { data: dData } = await supabase.from('distritos').select('*');
      if (dData) setDistritos(dData);
    }
    fetchDistritos();
  }, []);

  const toggleDistrito = (nombre: string) => {
    setData(prev => ({
      ...prev,
      distritos_seleccionados: prev.distritos_seleccionados.includes(nombre)
        ? prev.distritos_seleccionados.filter(d => d !== nombre)
        : [...prev.distritos_seleccionados, nombre]
    }));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[#0A1E3D]">Modalidad y zonas</h3>
      
      {/* Modalidades */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-500">Modalidades que ofreces</label>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setData({...data, ofrece_domicilio: !data.ofrece_domicilio})}
            className={`p-4 border rounded-xl flex items-center gap-2 ${data.ofrece_domicilio ? 'border-[#1A5C3A] bg-[#f0f9f4] text-[#1A5C3A]' : 'border-slate-200'}`}>
            <input type="checkbox" checked={data.ofrece_domicilio} readOnly className="accent-[#1A5C3A]" /> A domicilio
          </button>
          <button 
            onClick={() => setData({...data, ofrece_videollamada: !data.ofrece_videollamada})}
            className={`p-4 border rounded-xl flex items-center gap-2 ${data.ofrece_videollamada ? 'border-[#1A5C3A] bg-[#f0f9f4] text-[#1A5C3A]' : 'border-slate-200'}`}>
            <input type="checkbox" checked={data.ofrece_videollamada} readOnly className="accent-[#1A5C3A]" /> Videollamada
          </button>
        </div>
      </div>

      {/* Distritos */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-500">Distritos de Lima donde atiendes</label>
        <div className="grid grid-cols-3 gap-2">
          {distritos.map(d => (
            <button
              key={d.id}
              onClick={() => toggleDistrito(d.nombre)}
              className={`p-2 text-sm border rounded-lg transition-all ${data.distritos_seleccionados.includes(d.nombre) ? 'border-[#1A5C3A] bg-[#f0f9f4] text-[#1A5C3A]' : 'border-slate-200'}`}
            >
              {d.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Precio */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500">Precio por sesión (S/)</label>
        <input 
          type="number" 
          className="w-full p-3 border rounded-xl" 
          value={data.precio_sesion}
          onChange={e => setData({...data, precio_sesion: e.target.value})} 
        />
      </div>

      <div className="flex gap-4 pt-4">
        <button onClick={onBack} className="flex-1 p-4 border rounded-xl font-bold flex items-center justify-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Atrás
        </button>
        <button onClick={() => onNext(data)} className="flex-1 bg-[#1A5C3A] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
          Continuar <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}