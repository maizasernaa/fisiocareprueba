import { useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function Step1Datos({ onNext }: any) {
  const [d, setD] = useState({ nombres: '', apellidos: '', email: '', celular: '', password: '' });
  const [errors, setErrors] = useState<any>({});
  const [showPass, setShowPass] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'nombres' && !/^[a-zA-ZÁ-ÿ\s]+$/.test(value)) error = "Solo letras permitidas";
    if (name === 'apellidos' && !/^[a-zA-ZÁ-ÿ\s]+$/.test(value)) error = "Solo letras permitidas";
    if (name === 'password' && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) 
        error = "Mín. 8 caracteres, 1 mayús, 1 número, 1 especial (@$!%*?&)";
    
    setErrors({ ...errors, [name]: error });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setD({ ...d, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = () => {
    if (Object.values(errors).every(e => e === '') && d.nombres && d.password) {
      onNext(d);
    } else {
      alert("Por favor, corrige los errores antes de continuar.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Nombres */}
      <InputWithError 
        name="nombres" placeholder="Nombres" value={d.nombres} 
        onChange={handleInputChange} error={errors.nombres} 
      />
      
      {/* Apellidos */}
      <InputWithError 
        name="apellidos" placeholder="Apellidos" value={d.apellidos} 
        onChange={handleInputChange} error={errors.apellidos} 
      />

      <input type="email" name="email" placeholder="Correo" className="w-full p-4 border rounded-xl" onChange={handleInputChange} />
      
      <input 
        type="text" // Cambiado a 'text' para tener control total
        name="celular" 
        placeholder="Celular" 
        value={d.celular}
        className="w-full p-4 border rounded-xl" 
        onChange={(e) => {
          // Esto borra inmediatamente cualquier cosa que no sea un número (0-9)
          const soloNumeros = e.target.value.replace(/\D/g, '');
          setD({...d, celular: soloNumeros});
        }} 
        maxLength={9} // Opcional: limita a 9 dígitos
      />

      {/* Password con toggle y error */}
      <div className="relative">
        <input type={showPass ? 'text' : 'password'} name="password" placeholder="Contraseña" 
               className={`w-full p-4 border rounded-xl ${errors.password ? 'border-red-500' : ''}`} 
               onChange={handleInputChange} />
        <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-4 text-slate-400">
            {showPass ? <EyeOff size={20}/> : <Eye size={20}/>}
        </button>
        {errors.password && <p className="text-red-500 text-xs mt-1 px-1">{errors.password}</p>}
      </div>

      <button onClick={handleSubmit} className="w-full bg-[#0A1E3D] text-white py-4 rounded-xl font-bold">Continuar</button>
    </div>
  );
}

// Componente auxiliar para inputs
function InputWithError({ name, placeholder, value, onChange, error }: any) {
  return (
    <div className="space-y-1">
      <input 
        name={name} placeholder={placeholder} value={value} onChange={onChange}
        className={`w-full p-4 border rounded-xl ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200'}`} 
      />
      {error && (
        <div className="flex items-center gap-1 text-red-500 text-xs px-1">
            <AlertCircle size={12} /> {error}
        </div>
      )}
    </div>
  );
}