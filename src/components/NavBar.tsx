import { Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isSelected = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-[#0A1E3D] p-2 rounded-xl transition-transform group-hover:scale-105">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-[#0A1E3D] tracking-tight">FisioCare</span>
        </Link>

        {/* Links de Navegación */}
        <div className="hidden md:flex items-center gap-2">
          {[
            { name: 'Inicio', path: '/' },
            { name: 'Especialistas', path: '/especialistas' },
            { name: '¿Cómo funciona?', path: '/como-funciona' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isSelected(item.path) 
                  ? 'bg-sky-50 text-sky-700' 
                  : 'text-slate-600 hover:text-[#0A1E3D] hover:bg-slate-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* BOTÓN ACTUALIZADO: Redirección directa al registro de fisio */}
          <Link 
            to="/registro-fisio"
            className="ml-4 bg-[#E8F5EE] text-[#1A6645] px-5 py-2.5 rounded-full text-sm font-bold border border-[#B8E0CA] hover:bg-[#dcf3e7] transition flex items-center gap-1"
          >
            ✦ ¿Eres fisio? Únete
          </Link>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          <Link 
            to="/login"
            className="px-5 py-2.5 rounded-lg text-sm font-bold text-slate-600 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
          >
            Iniciar sesión
          </Link>
          <Link 
            to="/seleccion-registro"
            className="bg-[#0A1E3D] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#122d5a] transition"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}