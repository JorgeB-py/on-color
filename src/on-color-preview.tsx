import React, { useState } from 'react'
import { DropletIcon, LeafIcon, BarChartIcon, SmartphoneIcon, HomeIcon, TrendingUpIcon, LightbulbIcon, UserIcon, DollarSignIcon } from 'lucide-react'

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [username, setUsername] = useState('AguaUser123')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-[300px] h-[600px] bg-white rounded-[30px] overflow-hidden shadow-xl border-4 border-gray-800 relative">
        <div className="bg-gray-800 h-6 flex justify-center items-center">
          <div className="w-20 h-4 bg-black rounded-b-xl"></div>
        </div>
        <div className="h-[568px] overflow-y-auto">
          {!isLoggedIn ? (
            <div className="p-4">
              <h2 className="text-2xl font-bold text-cyan-800 text-center mb-4">Iniciar sesión</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  Iniciar sesión
                </button>
              </form>
            </div>
          ) : (
            <>
              <header className="bg-cyan-600 text-white p-4 flex items-center">
                <DropletIcon className="w-6 h-6 mr-2" />
                <h1 className="text-xl font-bold">On-Color</h1>
              </header>
              <main>
                {activeTab === 'home' && (
                  <>
                    <section className="bg-cyan-50 p-4">
                      <h2 className="text-xl font-bold text-cyan-800 text-center mb-2">Ahorra agua, colorea tu futuro</h2>
                      <p className="text-sm text-center mb-4">On-Color te ayuda a reducir tu consumo de agua de forma divertida y efectiva.</p>
                      <button className="bg-cyan-600 text-white py-2 px-4 rounded-full w-full mb-4">Comenzar ahora</button>
                      <div className="bg-gray-300 h-32 flex items-center justify-center text-gray-500">
                        <DropletIcon className="w-12 h-12" />
                      </div>
                    </section>
                    <section className="p-4">
                      <h2 className="text-lg font-bold text-cyan-800 mb-4">Características principales</h2>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-100 p-2 rounded-full mr-3">
                            <LeafIcon className="w-6 h-6 text-cyan-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Eco-friendly</h3>
                            <p className="text-sm text-gray-600">Reduce tu huella hídrica y contribuye al medio ambiente.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-cyan-100 p-2 rounded-full mr-3">
                            <BarChartIcon className="w-6 h-6 text-cyan-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Seguimiento detallado</h3>
                            <p className="text-sm text-gray-600">Monitorea tu consumo de agua en tiempo real.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-cyan-100 p-2 rounded-full mr-3">
                            <SmartphoneIcon className="w-6 h-6 text-cyan-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Fácil de usar</h3>
                            <p className="text-sm text-gray-600">Interfaz intuitiva para todos los usuarios.</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                )}
                {activeTab === 'stats' && (
                  <section className="p-4">
                    <h2 className="text-lg font-bold text-cyan-800 mb-4">Tu consumo de agua</h2>
                    <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                      <h3 className="font-semibold mb-2">Consumo mensual</h3>
                      <div className="flex items-end space-x-2">
                        <div className="bg-cyan-200 w-8 h-32"></div>
                        <div className="bg-cyan-300 w-8 h-40"></div>
                        <div className="bg-cyan-400 w-8 h-36"></div>
                        <div className="bg-cyan-500 w-8 h-48"></div>
                        <div className="bg-cyan-600 w-8 h-56"></div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-600">
                        <span>Ene</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Abr</span>
                        <span>May</span>
                      </div>
                    </div>
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
                      <p className="text-yellow-700">
                        Tu consumo de agua ha aumentado un 15% este mes. ¡Intenta reducirlo para ayudar al medio ambiente y ahorrar en tu factura!
                      </p>
                    </div>
                  </section>
                )}
                {activeTab === 'tips' && (
                  <section className="p-4">
                    <h2 className="text-lg font-bold text-cyan-800 mb-4">Ideas para ahorrar agua</h2>
                    <ul className="space-y-4">
                      <li className="bg-cyan-50 p-3 rounded-lg">
                        <h3 className="font-semibold text-cyan-800">Cierra el grifo al cepillarte</h3>
                        <p className="text-sm text-gray-600">Puedes ahorrar hasta 12 litros por minuto.</p>
                      </li>
                      <li className="bg-cyan-50 p-3 rounded-lg">
                        <h3 className="font-semibold text-cyan-800">Usa la lavadora a carga completa</h3>
                        <p className="text-sm text-gray-600">Optimiza el uso de agua y energía.</p>
                      </li>
                      <li className="bg-cyan-50 p-3 rounded-lg">
                        <h3 className="font-semibold text-cyan-800">Recoge agua de lluvia</h3>
                        <p className="text-sm text-gray-600">Úsala para regar plantas o limpiar exteriores.</p>
                      </li>
                      <li className="bg-cyan-50 p-3 rounded-lg">
                        <h3 className="font-semibold text-cyan-800">Repara fugas rápidamente</h3>
                        <p className="text-sm text-gray-600">Una fuga puede desperdiciar hasta 30 litros al día.</p>
                      </li>
                    </ul>
                  </section>
                )}
                {activeTab === 'discounts' && (
                  <section className="p-4">
                    <h2 className="text-lg font-bold text-cyan-800 mb-4">Tus descuentos por ahorro</h2>
                    <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
                      <p className="text-green-700 font-semibold">
                        ¡Felicidades! Has obtenido un descuento del 10% en tu próxima factura por tu ahorro de agua.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-cyan-50 p-3 rounded-lg">
                        <h3 className="font-semibold text-cyan-800">Descuento actual</h3>
                        <p className="text-2xl font-bold text-cyan-600">10%</p>
                      </div>
                      <div className="bg-cyan-50 p-3 rounded-lg">
                        <h3 className="font-semibold text-cyan-800">Próximo objetivo</h3>
                        <p className="text-sm text-gray-600">Ahorra 5% más para obtener un descuento del 15%</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div className="bg-cyan-600 h-2.5 rounded-full" style={{width: '66%'}}></div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
                {activeTab === 'profile' && (
                  <section className="p-4">
                    <h2 className="text-lg font-bold text-cyan-800 mb-4">Tu perfil</h2>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="bg-cyan-200 rounded-full p-3">
                          <UserIcon className="w-12 h-12 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{username}</h3>
                          <p className="text-sm text-gray-600">Miembro desde 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Editar perfil</button>
                      <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Configuración</button>
                      <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">Ayuda y soporte</button>
                      <button className="w-full text-left px-4 py-2 bg-red-100 rounded-lg hover:bg-red-200 text-red-600">Cerrar sesión</button>
                    </div>
                  </section>
                )}
              </main>
            </>
          )}
        </div>
        {isLoggedIn && (
          <nav className="bg-white border-t border-gray-200 flex justify-around items-center h-14 absolute bottom-0 left-0 right-0">
            <button className={`${activeTab === 'home' ? 'text-cyan-600' : 'text-gray-400'}`} onClick={() => setActiveTab('home')}>
              <HomeIcon className="w-6 h-6" />
            </button>
            <button className={`${activeTab === 'stats' ? 'text-cyan-600' : 'text-gray-400'}`} onClick={() => setActiveTab('stats')}>
              <TrendingUpIcon className="w-6 h-6" />
            </button>
            <button className={`${activeTab === 'tips' ? 'text-cyan-600' : 'text-gray-400'}`} onClick={() => setActiveTab('tips')}>
              <LightbulbIcon className="w-6 h-6" />
            </button>
            <button className={`${activeTab === 'discounts' ? 'text-cyan-600' : 'text-gray-400'}`} onClick={() => setActiveTab('discounts')}>
              <DollarSignIcon className="w-6 h-6" />
            </button>
            <button className={`${activeTab === 'profile' ? 'text-cyan-600' : 'text-gray-400'}`} onClick={() => setActiveTab('profile')}>
              <UserIcon className="w-6 h-6" />
            </button>
          </nav>
        )}
      </div>
    </div>
  )
}