import { useEspecialistas } from '../hooks/useEspecialistas';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Star, 
  Heart,
  User,
  Shield,
  Home as HomeIcon,
  MessageSquare,
  CheckCircle,
  Mail,
  Phone,
  Activity
} from 'lucide-react';

export default function Especialistas() {
  const {
    busqueda, setBusqueda,
    modalidad, setModalidad,
    filtroGenero, setFiltroGenero,
    distrito, setDistrito,
    precioMax, setPrecioMax,
    calificacionMin, setCalificacionMin,
    distritosDB,
    especialistasFiltrados
  } = useEspecialistas();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 antialiased font-body flex flex-col justify-between">
      
      {/* SECCIÓN PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-8 space-y-6 w-full flex-grow">
        
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2">
          <div>
            <h1 className="text-3xl font-bold text-[#0A1E3D] font-display tracking-tight">Fisioterapeutas en Lima</h1>
            <p className="text-slate-400 text-sm font-light mt-1">
              {especialistasFiltrados.length === 0 
                ? 'No hay profesionales disponibles para esta selección' 
                : `${especialistasFiltrados.length} ${especialistasFiltrados.length === 1 ? 'profesional disponible' : 'profesionales disponibles'} para ti`}
            </p>
          </div>
        </div>

        {/* BUSCADOR EN FORMA DE PÍLDORA */}
        <div className="relative bg-white rounded-full shadow-sm border border-slate-200/60 p-1.5 transition-all focus-within:border-blue-400 focus-within:shadow-md focus-within:shadow-blue-50/40">
          <div className="flex items-center pl-5">
            <Search className="h-5 w-5 text-slate-400 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Buscar por nombre, especialidad o palabra clave..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full bg-transparent py-2.5 px-3 text-sm focus:outline-none text-slate-700 placeholder-slate-400 font-light"
            />
          </div>
        </div>

        {/* CONTENEDOR CONTENIDO ASIDE + GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* BARRA LATERAL IZQUIERDA (STICKY) */}
          <aside className="lg:col-span-3 bg-white border border-slate-200/70 rounded-2xl p-6 shadow-sm space-y-6 sticky top-[88px] max-h-[calc(100vh-110px)] overflow-y-auto scrollbar-thin">
            
            <div className="flex items-center gap-2 text-[#0A1E3D] pb-3 border-b border-slate-100">
              <SlidersHorizontal className="h-4 w-4 text-blue-600" />
              <h2 className="text-xs font-bold tracking-wider uppercase text-slate-700">Filtros de Búsqueda</h2>
            </div>

            {/* Tipo de Atención */}
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tipo de Atención</label>
              <div className="space-y-2.5 text-sm text-slate-600">
                {[
                  { id: 'todos', label: 'Cualquiera' },
                  { id: 'Domicilio', label: 'A Domicilio' },
                  { id: 'Online', label: 'Videollamada' },
                  { id: 'ambos', label: 'Ofrece Ambos' }
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-3 cursor-pointer group select-none">
                    <input 
                      type="radio" 
                      name="modalidad" 
                      checked={modalidad === item.id} 
                      onChange={() => setModalidad(item.id as any)} 
                      className="h-4 w-4 text-[#0F2850] border-slate-300 focus:ring-0 focus:ring-offset-0 cursor-pointer transition" 
                    />
                    <span className={`text-xs transition ${modalidad === item.id ? 'font-semibold text-[#0A1E3D]' : 'text-slate-500 group-hover:text-slate-800'}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Género */}
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Género</label>
              <div className="space-y-2.5 text-sm text-slate-600">
                {[
                  { id: 'todos', label: 'Todos' },
                  { id: 'Femenino', label: 'Femenino' },
                  { id: 'Masculino', label: 'Masculino' }
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-3 cursor-pointer group select-none">
                    <input 
                      type="radio" 
                      name="filtroGenero" 
                      checked={filtroGenero === item.id} 
                      onChange={() => setFiltroGenero(item.id as any)} 
                      className="h-4 w-4 text-[#0F2850] border-slate-300 focus:ring-0 focus:ring-offset-0 cursor-pointer transition" 
                    />
                    <span className={`text-xs transition ${filtroGenero === item.id ? 'font-semibold text-[#0A1E3D]' : 'text-slate-500 group-hover:text-slate-800'}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Distrito de Lima */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Distrito de Lima</label>
              <div className="relative">
                <select 
                  value={distrito} 
                  onChange={(e) => setDistrito(e.target.value)} 
                  className="w-full bg-slate-50/60 border border-slate-200 text-xs py-3 pl-3 pr-10 rounded-xl text-slate-700 focus:outline-none focus:border-blue-300 focus:bg-white appearance-none cursor-pointer font-medium transition"
                >
                  <option value="todos">Todos los distritos</option>
                  {distritosDB.map((dist: any) => (
                    <option key={dist.id} value={dist.nombre}>
                      {dist.nombre}
                    </option>
                  ))}
                </select>
                <MapPin className="absolute right-3.5 top-3.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* RANGO DE PRECIOS CON TIRADOR REDONDO */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Precio máximo</span>
                <span className="text-[#0A1E3D] font-extrabold text-sm tracking-tight">S/ {precioMax}</span>
              </div>
              <input 
                type="range" 
                min="70" 
                max="200" 
                value={precioMax} 
                onChange={(e) => setPrecioMax(Number(e.target.value))} 
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0F2850]
                  [&::-webkit-slider-thumb]:appearance-none 
                  [&::-webkit-slider-thumb]:h-4 
                  [&::-webkit-slider-thumb]:w-4 
                  [&::-webkit-slider-thumb]:rounded-full 
                  [&::-webkit-slider-thumb]:bg-[#0F2850] 
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-110" 
              />
            </div>

            {/* Calificación Mínima */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Calificación mínima</label>
              <div className="grid grid-cols-4 gap-1.5 text-xs font-semibold">
                <button 
                  onClick={() => setCalificacionMin(null)} 
                  className={`py-2 rounded-xl border text-[11px] font-bold text-center transition ${!calificacionMin ? 'bg-[#0F2850] text-white border-[#0F2850] shadow-sm' : 'bg-slate-50/60 border-slate-200 text-slate-500 hover:bg-slate-100/80 hover:text-slate-700'}`}
                >
                  Todas
                </button>
                {[4, 4.5, 4.8].map((val) => (
                  <button 
                    key={val} 
                    onClick={() => setCalificacionMin(val)} 
                    className={`py-2 rounded-xl border text-[11px] font-bold text-center transition ${calificacionMin === val ? 'bg-[#0F2850] text-white border-[#0F2850] shadow-sm' : 'bg-slate-50/60 border-slate-200 text-slate-500 hover:bg-slate-100/80 hover:text-slate-700'}`}
                  >
                    {val}+
                  </button>
                ))}
              </div>
            </div>

            {/* Limpiador global */}
            <button 
              onClick={() => { setBusqueda(''); setModalidad('todos'); setFiltroGenero('todos'); setDistrito('todos'); setPrecioMax(200); setCalificacionMin(null); }} 
              className="w-full bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 text-slate-500 hover:text-red-600 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              ✕ Limpiar filtros
            </button>
          </aside>

          {/* PARTE DERECHA: GRILLA DE TARJETAS HORIZONTALES */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {especialistasFiltrados.length > 0 ? (
              especialistasFiltrados.map((fisio: any) => (
                <div key={fisio.id} className="bg-white border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between relative shadow-sm hover:shadow-md transition">
                  
                  {/* Encabezado de Tarjeta */}
                  <div>
                    <div className="flex items-start gap-4">
                      {/* Avatar Unificado */}
                      <div className="w-[76px] h-[76px] rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 flex-shrink-0 overflow-hidden">
                        <User className="h-8 w-8 stroke-[1.2]" />
                      </div>
                      
                      {/* Contenidos descriptivos */}
                      <div className="space-y-0.5">
                        <h3 className="font-body text-base font-bold text-[#0A1E3D] leading-tight">
                          {fisio.genero} {fisio.nombre}
                        </h3>

                        {/* Sello de Verificación */}
                        <div className="inline-flex items-center gap-1 bg-[#E8F5EE] text-[#1A6645] font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-[#B8E0CA]/60 tracking-wide uppercase mt-0.5">
                          <CheckCircle className="h-2.5 w-2.5 fill-current" /> Verificado
                        </div>
                        
                        <p className="text-[10px] text-slate-400 font-medium pt-1">
                          Colegiatura CFF verificada • {fisio.colegiatura}
                        </p>

                        <div className="flex items-center gap-1 pt-1">
                          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-xs font-bold text-slate-700">{fisio.rating.toFixed(1)}</span>
                          <span className="text-slate-400 text-xs font-light">({fisio.resenas})</span>
                        </div>
                      </div>

                      {/* Precio Flotante */}
                      <div className="absolute top-5 right-5 text-right">
                        <p className="text-base font-extrabold text-[#0A1E3D]">S/ {fisio.precio}</p>
                        <p className="text-[10px] text-slate-400 font-medium tracking-wide">por sesión</p>
                      </div>
                    </div>

                    {/* Píldoras de Especialidades */}
                    <div className="flex flex-wrap gap-1.5 pt-4 pl-1">
                      {fisio.especialidades.map((esp: string, i: number) => (
                        <span key={i} className="bg-slate-50 text-slate-600 text-xs font-medium px-3 py-1 rounded-lg border border-slate-200/50">
                          {esp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Fila Horizontal Intermedia e Icono de Escudo */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-4">
                    <div className="flex items-center gap-3 text-slate-500 text-xs pl-1">
                      <div className="h-6 w-6 bg-[#E8F5EE] text-[#1A6645] rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="h-3.5 w-3.5 fill-current" />
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-600 font-medium">
                        <span className="flex items-center gap-1">
                          <HomeIcon className="h-3.5 w-3.5 text-slate-400" />
                          {fisio.modalidades.join(' • ')}
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="flex items-center gap-1 font-light text-slate-500">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" />
                          {fisio.distritos.join(', ')}
                        </span>
                      </div>
                    </div>

                    {/* COLOR CORREGIDO: Acorde a la marca [#0A1E3D] */}
                    <div className="flex gap-2.5">
                      <button className="w-full bg-[#0A1E3D] hover:bg-[#122d5a] text-white font-semibold text-xs py-3 rounded-xl transition shadow-sm">
                        Ver perfil
                      </button>
                      <button className="h-[42px] w-[42px] border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition flex-shrink-0">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <div className="col-span-full bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-12 text-center">
                <p className="text-sm text-slate-400 font-light">
                  No encontramos fisioterapeutas que coincidan con los filtros seleccionados.
                </p>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* ── FOOTER CORPORATIVO OFICIAL RESTAURADO ── */}
      <footer className="bg-[#0A1E3D] text-slate-400 pt-16 pb-8 mt-20 w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#1E3A6E] p-1.5 rounded-lg text-white">
                <Activity className="h-4 w-4" />
              </div>
              <span className="font-display text-white font-semibold text-lg">FisioCare</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">Conectamos pacientes con fisioterapeutas verificados en Lima.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold">Pacientes</h4>
            <ul className="text-xs space-y-2.5 text-slate-400">
              <li><a href="#" className="hover:text-white transition">Buscar fisioterapeuta</a></li>
              <li><a href="#" className="hover:text-white transition">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition">Crear cuenta</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold">Profesionales</h4>
            <ul className="text-xs space-y-2.5 text-slate-400">
              <li><a href="#" className="hover:text-white transition">Únete como fisio</a></li>
              <li><a href="#" className="hover:text-white transition">Registrarme</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold">Contacto</h4>
            <ul className="text-xs space-y-2.5 text-slate-400">
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-blue-400" /> hola@fisiocare.pe</li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-blue-400" /> +51 999 888 777</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-blue-400" /> Lima, Perú</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© 2026 FisioCare. Todos los derechos reservados.</p>
          <p>Hecho con ♥ en Lima</p>
        </div>
      </footer>

    </div>
  );
}