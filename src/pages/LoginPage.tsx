import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Activity, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ 
      email, 
      password 
    });
    
    if (authError) {
      setError("El correo o la contraseña son incorrectos. Por favor, intenta de nuevo.");
      return;
    }

    const { data: userData } = await supabase
      .from('usuarios')
      .select('rol')
      .eq('id', authData.user.id)
      .single();

    if (userData?.rol === 'fisioterapeuta') navigate('/dashboard-fisio');
    else navigate('/dashboard-paciente');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="flex justify-center mb-8 gap-2 items-center text-[#0A1E3D]">
          <div className="bg-[#0A1E3D] p-2 rounded-xl">
             <Activity className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">FisioCare</span>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-slate-100 rounded-full transition">
              <ArrowLeft className="h-6 w-6 text-[#0A1E3D]" />
            </button>
            <h2 className="text-2xl font-bold text-[#0A1E3D]">Bienvenido de nuevo</h2>
          </div>
          
          <p className="text-slate-500 mb-8 -mt-6 ml-14">Ingresa para continuar</p>

          {/* Cajita de Error */}
          {error && (
            <div className="mb-6 flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className={`w-full pl-4 pr-12 py-4 rounded-xl border ${error ? 'border-red-300' : 'border-slate-200'} focus:ring-2 focus:ring-[#0A1E3D] outline-none transition`}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="absolute right-4 top-4 h-5 w-5 text-slate-400" />
            </div>

            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Contraseña" 
                className={`w-full pl-4 pr-12 py-4 rounded-xl border ${error ? 'border-red-300' : 'border-slate-200'} focus:ring-2 focus:ring-[#0A1E3D] outline-none transition`}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <button type="submit" className="w-full bg-[#0A1E3D] text-white py-4 rounded-xl font-bold hover:bg-[#122d5a] transition shadow-lg shadow-[#0A1E3D]/20">
              Iniciar sesión
            </button>
          </form>

          {/* CAMBIO: Redirección a la selección de registro */}
          <p className="text-center mt-6 text-sm text-slate-600">
            ¿No tienes cuenta?{' '}
            <button 
              onClick={() => navigate('/seleccion-registro')} 
              className="text-[#0A1E3D] font-bold hover:underline"
            >
              Regístrate
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}