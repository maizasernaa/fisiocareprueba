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
    // NUEVO: Validación de formato de correo
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Correo inválido";
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
    // NUEVO: Verifica que TODOS los campos tengan algo escrito
    const todosLlenos = d.nombres && d.apellidos && d.email && d.celular && d.password;
    const sinErrores = Object.values(errors).every(e => e === '');

    if (todosLlenos && sinErrores) {
      onNext(d);
    } else {
      alert("Por favor, llena todos los campos y corrige los errores antes de continuar.");
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

      {/* Correo (Corregido con value y mensaje de error) */}
      <div className="space-y-1">
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" 
          value={d.email} 
          className={`w-full p-4 border rounded-xl ${errors.email ? 'border-red-500' : 'border-slate-200'}`} 
          onChange={handleInputChange} 
        />
        {errors.email && (
          <div className="flex items-center gap-1 text-red-500 text-xs px-1">
              <AlertCircle size={12} /> {errors.email}
          </div>
        )}
      </div>
      
      {/* Celular */}
      <input 
        type="text"
        name="celular" 
        placeholder="Celular" 
        value={d.celular}
        className="w-full p-4 border rounded-xl border-slate-200" 
        onChange={(e) => {
          const soloNumeros = e.target.value.replace(/\D/g, '');
          setD({...d, celular: soloNumeros});
          // Si quieres validar que tenga 9 dígitos obligatorios, podrías hacerlo en handleSubmit
        }} 
        maxLength={9}
      />

      {/* Password con toggle y error */}
      <div className="relative space-y-1">
        <input 
          type={showPass ? 'text' : 'password'} 
          name="password" 
          placeholder="Contraseña" 
          value={d.password}
          className={`w-full p-4 border rounded-xl ${errors.password ? 'border-red-500' : 'border-slate-200'}`} 
          onChange={handleInputChange} 
        />
        <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-4 text-slate-400">
            {showPass ? <EyeOff size={20}/> : <Eye size={20}/>}
        </button>
        {errors.password && <p className="text-red-500 text-xs mt-1 px-1">{errors.password}</p>}
      </div>

      <button onClick={handleSubmit} className="w-full bg-[#0A1E3D] text-white py-4 rounded-xl font-bold mt-2">
        Continuar
      </button>
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