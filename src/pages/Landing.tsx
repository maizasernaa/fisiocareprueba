import React from 'react';
import { 
  Heart, 
  MapPin, 
  Shield, 
  Search, 
  UserCheck, 
  Calendar, 
  MessageSquare, 
  Phone, 
  Mail 
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      
      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-900 text-white p-2 rounded-xl flex items-center justify-center">
              <Heart className="h-5 w-5 fill-current text-white" />
            </div>
            <span className="text-xl font-bold text-blue-950 tracking-tight">FisioCare</span>
          </div>
          
          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#inicio" className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl transition font-semibold">Inicio</a>
            <a href="#especialistas" className="hover:text-blue-900 transition">Especialistas</a>
            <a href="#faq" className="hover:text-blue-900 transition">FAQ</a>
            <a href="#unete" className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-full hover:bg-emerald-100 transition font-medium">
              • ¿Eres fisio? Únete
            </a>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-4 text-sm font-semibold">
            <button className="text-slate-600 hover:text-blue-900 transition flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4" />
              Iniciar sesión
            </button>
            <button className="bg-blue-900 hover:bg-blue-950 text-white px-5 py-2.5 rounded-xl transition shadow-sm">
              Registrarse
            </button>
            <div className="h-9 w-9 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center cursor-pointer">
              <UserCheck className="h-4 w-4" />
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="inicio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Textos Izquierda */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-100/50">
            <Shield className="h-3.5 w-3.5" />
            Fisioterapeutas verificados en Lima
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-950 tracking-tight leading-[1.1]">
            Encuentra tu <br />
            fisioterapeuta <br />
            verificado, <span className="text-blue-700">donde estés</span>
          </h1>
          
          <p className="text-base text-slate-500 max-w-lg leading-relaxed font-normal">
            Reserva sesiones a domicilio o por videollamada con profesionales colegiados. Recupérate con confianza, en tus tiempos.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md transition flex items-center gap-2">
              Soy paciente →
            </button>
            <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3.5 rounded-xl font-bold text-sm transition">
              Soy fisioterapeuta
            </button>
          </div>

          {/* Social Proof / Rating */}
          <div className="flex items-center gap-3 pt-6">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-800 border-2 border-white"></div>
              <div className="h-8 w-8 rounded-full bg-blue-700 border-2 border-white"></div>
              <div className="h-8 w-8 rounded-full bg-blue-600 border-2 border-white"></div>
              <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white"></div>
            </div>
            <div className="text-xs">
              <div className="flex items-center text-amber-500 font-bold gap-0.5">
                ⭐⭐⭐⭐⭐ <span className="text-slate-800 ml-1">4.9</span>
              </div>
              <p className="text-slate-400 font-medium">+2,000 sesiones realizadas</p>
            </div>
          </div>
        </div>

        {/* Imagen Derecha con flotante */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
              alt="Fisioterapia FisioCare" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Card Flotante "Próxima Sesión" */}
          <div className="absolute bottom-6 left-6 md:-left-6 bg-white/95 backdrop-blur px-5 py-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-xs">
            <div className="bg-emerald-50 text-emerald-700 p-2.5 rounded-xl">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Próxima sesión</p>
              <p className="text-sm font-bold text-slate-800">Mañana 11:00 — Domicilio</p>
            </div>
          </div>
        </div>
      </header>

      {/* POR QUÉ FISIOCARE */}
      <section className="bg-slate-50/50 border-t border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">¿Por qué FisioCare?</h2>
            <p className="text-slate-500 max-w-md mx-auto text-sm font-medium">Diseñado para que tu recuperación sea simple y segura.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 space-y-5">
              <div className="h-10 w-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-blue-950">Profesionales verificados</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Todos nuestros fisioterapeutas tienen colegiatura validada y documentación al día.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 space-y-5">
              <div className="h-10 w-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-blue-950">A domicilio o por video</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Atención en tu hogar en Lima o sesiones online desde donde estés.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 space-y-5">
              <div className="h-10 w-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                <Heart className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-blue-950">Cuidado personalizado</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Reseñas reales, especialidades claras y precios transparentes para elegir mejor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">Cómo funciona</h2>
            <p className="text-slate-500 max-w-md mx-auto text-sm font-medium">En 3 simples pasos estás en sesión.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 relative pt-10 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 bg-blue-950 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div className="h-14 w-14 bg-emerald-50/70 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-1">Busca</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Filtra por modalidad, distrito, precio y especialidad.</p>
            </div>

            {/* Paso 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 relative pt-10 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 bg-blue-950 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div className="h-14 w-14 bg-emerald-50/70 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-1">Elige y agenda</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Revisa perfiles, reseñas y reserva el horario que prefieras.</p>
            </div>

            {/* Paso 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 relative pt-10 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 bg-blue-950 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div className="h-14 w-14 bg-emerald-50/70 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-1">Recibe tu sesión</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Paga seguro con Yape o tarjeta y empieza tu recuperación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bloque Pacientes */}
        <div className="bg-blue-900 text-white p-10 rounded-[1.5rem] space-y-6 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">¿Necesitas atención?</h3>
            <p className="text-blue-100 text-sm font-light">Encuentra al fisio ideal para ti en minutos.</p>
          </div>
          <button className="bg-white hover:bg-slate-50 text-blue-900 font-bold px-6 py-3 rounded-xl text-sm self-start shadow transition">
            Buscar fisioterapeutas
          </button>
        </div>

        {/* Bloque Fisios */}
        <div className="bg-emerald-800 text-white p-10 rounded-[1.5rem] space-y-6 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">¿Eres fisioterapeuta?</h3>
            <p className="text-emerald-100 text-sm font-light">Crece tu consulta con pacientes que te buscan.</p>
          </div>
          <button className="bg-white hover:bg-slate-50 text-emerald-900 font-bold px-6 py-3 rounded-xl text-sm self-start shadow transition">
            Quiero registrarme
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-slate-400 pt-16 pb-8 border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-blue-900 text-white p-1.5 rounded-lg">
                <Heart className="h-4 w-4 fill-current text-white" />
              </div>
              <span className="font-bold text-lg">FisioCare</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">Conectamos pacientes con fisioterapeutas verificados en Lima.</p>
          </div>
          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold">Pacientes</h4>
            <ul className="text-xs space-y-2 font-medium">
              <li><a href="#" className="hover:text-white transition">Buscar fisioterapeuta</a></li>
              <li><a href="#" className="hover:text-white transition">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition">Crear cuenta</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold">Profesionales</h4>
            <ul className="text-xs space-y-2 font-medium">
              <li><a href="#" className="hover:text-white transition">Únete como fisio</a></li>
              <li><a href="#" className="hover:text-white transition">Registrarme</a></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold">Contacto</h4>
            <ul className="text-xs space-y-2 font-medium text-slate-400">
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-blue-400" /> hola@fisiocare.pe</li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-blue-400" /> +51 999 888 777</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-blue-400" /> Lima, Perú</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold text-slate-500">
          <p>© 2026 FisioCare. Todos los derechos reservados.</p>
          <p>Hecho con ♥ en Lima</p>
        </div>
      </footer>

    </div>
  );
}