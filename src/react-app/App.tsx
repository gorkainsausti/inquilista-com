import { useState } from "react";
import "./App.css";

const App = () => {
	const [searchLocation, setSearchLocation] = useState("");
	const [searchType, setSearchType] = useState("alquiler");

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implementar búsqueda
		console.log("Búsqueda:", { searchLocation, searchType });
	};

	const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchLocation(e.target.value);
	};

	const handleTypeChange = (type: string) => {
		setSearchType(type);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="bg-white shadow-sm sticky top-0 z-50">
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
						<h1 className="text-2xl font-bold text-[#c026d3]">
								Inquilista
							</h1>
							<span className="ml-2 text-sm text-gray-600">
								Vivienda Justa
							</span>
						</div>
						<div className="hidden md:flex items-center space-x-6">
							<a
								href="#datos"
								className="text-gray-700 hover:text-[#c026d3] transition-colors"
								tabIndex={0}
								aria-label="Ver datos"
							>
								Datos
							</a>
							<a
								href="#ayuda"
								className="text-gray-700 hover:text-[#c026d3] transition-colors"
								tabIndex={0}
								aria-label="Ayuda"
							>
								Ayuda
							</a>
							<a
								href="#sobre-nosotros"
								className="text-gray-700 hover:text-[#c026d3] transition-colors"
								tabIndex={0}
								aria-label="Sobre nosotros"
							>
								Sobre Nosotros
							</a>
							<button
								className="bg-[#c026d3] text-white px-4 py-2 rounded-lg hover:bg-[#a21caf] transition-colors"
								aria-label="Publicar denuncia"
							>
								Publicar Denuncia
							</button>
						</div>
					</div>
				</nav>
			</header>

			{/* Hero Section */}
			<section className="bg-gradient-to-br from-[#faf5ff] to-[#f5d0fe] py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e879f9] to-[#c026d3] mb-4">
							Luchamos contra la injusticia de la vivienda en España
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Centralizamos datos y ayudamos a personas afectadas por
							abusos inmobiliarios. Tu voz importa.
						</p>
					</div>

					{/* Search Bar */}
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-2xl shadow-xl p-2">
							<div className="flex flex-col md:flex-row gap-2">
								<div className="flex-1">
									<div className="flex border-2 border-gray-200 rounded-lg focus-within:border-[#c026d3] transition-colors">
										<input
											type="text"
											placeholder="¿Dónde buscas?"
											value={searchLocation}
											onChange={handleLocationChange}
											className="flex-1 px-4 py-3 outline-none rounded-lg"
											aria-label="Ubicación de búsqueda"
										/>
									</div>
			</div>
								<div className="flex gap-2">
									<button
										type="button"
										onClick={() => handleTypeChange("alquiler")}
										className={`px-6 py-3 rounded-lg font-medium transition-colors ${
											searchType === "alquiler"
												? "bg-[#c026d3] text-white"
												: "bg-gray-100 text-gray-700 hover:bg-gray-200"
										}`}
										aria-label="Buscar alquiler"
										aria-pressed={searchType === "alquiler"}
									>
										Alquiler
									</button>
									<button
										type="button"
										onClick={() => handleTypeChange("venta")}
										className={`px-6 py-3 rounded-lg font-medium transition-colors ${
											searchType === "venta"
												? "bg-[#c026d3] text-white"
												: "bg-gray-100 text-gray-700 hover:bg-gray-200"
										}`}
										aria-label="Buscar venta"
										aria-pressed={searchType === "venta"}
									>
										Venta
									</button>
				<button
										type="submit"
										onClick={handleSearchSubmit}
										className="bg-[#c026d3] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#a21caf] transition-colors"
										aria-label="Buscar vivienda"
									>
										Buscar
				</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section id="sobre-nosotros" className="py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Nuestra Misión
						</h3>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Creemos en una vivienda justa y accesible para todos. Por eso
							centralizamos información y datos para combatir los abusos
							inmobiliarios en España.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mt-12">
						<div className="text-center p-6 rounded-lg bg-gray-50">
							<div className="w-16 h-16 bg-[#f5d0fe] rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-[#c026d3]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h4 className="text-xl font-semibold text-gray-900 mb-2">
								Transparencia
							</h4>
							<p className="text-gray-600">
								Centralizamos datos reales sobre precios, condiciones y
								prácticas abusivas en el mercado inmobiliario.
							</p>
						</div>

						<div className="text-center p-6 rounded-lg bg-gray-50">
							<div className="w-16 h-16 bg-[#f5d0fe] rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-[#c026d3]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h4 className="text-xl font-semibold text-gray-900 mb-2">
								Comunidad
							</h4>
							<p className="text-gray-600">
								Conectamos a personas afectadas y creamos una red de
								solidaridad contra los abusos inmobiliarios.
							</p>
						</div>

						<div className="text-center p-6 rounded-lg bg-gray-50">
							<div className="w-16 h-16 bg-[#f5d0fe] rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-[#c026d3]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</div>
							<h4 className="text-xl font-semibold text-gray-900 mb-2">
								Justicia
							</h4>
							<p className="text-gray-600">
								Proporcionamos herramientas y recursos para defender tus
								derechos como inquilino o comprador.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Data Section */}
			<section id="datos" className="py-16 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Datos que Importan
						</h3>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Visualizamos la realidad del mercado inmobiliario español con
							datos transparentes y actualizados.
				</p>
			</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="text-3xl font-bold text-[#c026d3] mb-2">
								45%
							</div>
							<div className="text-gray-600">
								de los españoles destinan más del 30% de sus ingresos al
								alquiler
							</div>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="text-3xl font-bold text-[#c026d3] mb-2">
								+12%
							</div>
							<div className="text-gray-600">
								incremento medio anual en el precio del alquiler en las
								ciudades principales
							</div>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="text-3xl font-bold text-[#c026d3] mb-2">
								1.200+
							</div>
							<div className="text-gray-600">
								denuncias registradas sobre prácticas abusivas en el último
								año
							</div>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="text-3xl font-bold text-[#c026d3] mb-2">
								68%
							</div>
							<div className="text-gray-600">
								de los jóvenes entre 25-34 años viven en alquiler por no poder
								acceder a la compra
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Help Section */}
			<section id="ayuda" className="py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							¿Necesitas Ayuda?
						</h3>
						<p className="text-lg text-gray-600 mb-8">
							Si has sido víctima de abusos inmobiliarios, estamos aquí para
							ayudarte. Comparte tu experiencia y encuentra recursos útiles.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								className="bg-[#c026d3] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#a21caf] transition-colors"
								aria-label="Publicar denuncia"
							>
								Publicar Mi Denuncia
							</button>
				<button
								className="bg-white text-[#c026d3] border-2 border-[#c026d3] px-8 py-3 rounded-lg font-medium hover:bg-[#f5d0fe] transition-colors"
								aria-label="Ver recursos"
							>
								Ver Recursos
				</button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<h4 className="text-xl font-bold mb-4">Inquilista</h4>
							<p className="text-gray-400">
								Vivienda justa para todos. Luchamos contra la injusticia
								inmobiliaria en España.
				</p>
			</div>
						<div>
							<h5 className="font-semibold mb-4">Enlaces</h5>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a
										href="#datos"
										className="hover:text-white transition-colors"
										tabIndex={0}
										aria-label="Datos"
									>
										Datos
									</a>
								</li>
								<li>
									<a
										href="#ayuda"
										className="hover:text-white transition-colors"
										tabIndex={0}
										aria-label="Ayuda"
									>
										Ayuda
									</a>
								</li>
								<li>
									<a
										href="#sobre-nosotros"
										className="hover:text-white transition-colors"
										tabIndex={0}
										aria-label="Sobre nosotros"
									>
										Sobre Nosotros
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h5 className="font-semibold mb-4">Recursos</h5>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors"
										tabIndex={0}
										aria-label="Guías legales"
									>
										Guías Legales
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors"
										tabIndex={0}
										aria-label="Contacto"
									>
										Contacto
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h5 className="font-semibold mb-4">Síguenos</h5>
							<div className="flex space-x-4">
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Twitter"
									tabIndex={0}
								>
									<span className="sr-only">Twitter</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Facebook"
									tabIndex={0}
								>
									<span className="sr-only">Facebook</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
						<p>&copy; 2024 Inquilista. Todos los derechos reservados.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
