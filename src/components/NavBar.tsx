import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase'; // Asegúrate de que esta ruta sea correcta
import { LayoutDashboard, LogOut } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [rol, setRol] = useState<'paciente' | 'fisio' | null>(null);

  useEffect(() => {
    // 1. Revisar si ya hay una sesión al cargar la página
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      if (session?.user) determinarRol(session.user.id);
    };

    checkUser();

    // 2. Escuchar cambios de sesión en tiempo real (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        determinarRol(session.user.id);
      } else {
        setRol(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 3. Averiguar si el usuario logueado es Fisioterapeuta o Paciente
  const determinarRol = async (userId: string) => {
    const { data: fisio } = await supabase
      .from('fisioterapeutas')
      .select('id')
      .eq('id', userId)
      .maybeSingle();

    if (fisio) {
      setRol('fisio');
    } else {
      setRol('paciente');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); // Redirigir al inicio tras cerrar sesión
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#1A5C3A] text-white p-1.5 rounded-lg">
              {/* Reemplaza con tu ícono de logo si tienes uno */}
              <span className="font-bold text-xl leading-none">F</span>
            </div>
            <span className="font-extrabold text-xl text-[#0A1E3D] tracking-tight">FisioCare</span>
          </Link>

          {/* Navegación Derecha (Dinámica) */}
          <div className="flex items-center gap-4">
            {user ? (
              // VISTA PARA USUARIO LOGUEADO
              <div className="flex items-center gap-3">
                <Link 
                  to={rol === 'fisio' ? '/dashboard-fisio' : '/dashboard-paciente'}
                  className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#1A5C3A] bg-slate-50 hover:bg-slate-100 px-4 py-2.5 rounded-xl transition"
                >
                  <LayoutDashboard className="h-4 w-4" /> 
                  Mi Panel
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center justify-center p-2.5 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-xl transition"
                  title="Cerrar sesión"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              // VISTA PARA VISITANTE (Sin iniciar sesión)
              <div className="flex items-center gap-3">
                <Link 
                  to="/login" 
                  className="text-sm font-bold text-slate-600 hover:text-[#0A1E3D] transition px-3"
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  to="/registro" 
                  className="bg-[#1A5C3A] hover:bg-[#124229] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-sm"
                >
                  Regístrate
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
