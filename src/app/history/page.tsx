import { MapPin, Target, Compass } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
      {/* Responsive header */}
import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function HistoryPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
        <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
        <img src="/logo.png" alt="Logo" className="w-13 h-auto" />
          <span className="ml-2 text-xl font-bold">FinMateAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/ai-advisor">
            Asesor de IA
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/history">
            Historia
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            Acerca de Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contacto
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link className="flex items-center" href="/">
                  <img src="/logo.png" alt="Logo" className="w-13 h-auto" />
                    <span className="ml-2 text-xl font-bold">FinMateAI</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link className="text-lg font-medium hover:text-purple-600 transition-colors" href="/">
                    Home
                  </Link>
                  <Link className="text-lg font-medium hover:text-purple-600 transition-colors" href="/ai-advisor">
                  Asesor de IA
                  </Link>
                  <Link className="text-lg font-medium hover:text-purple-600 transition-colors" href="/history">
                    Historia
                  </Link>
                  <Link className="text-lg font-medium hover:text-purple-600 transition-colors" href="/about">
                    Acerca de Nosotros
                  </Link>
                  <Link className="text-lg font-medium hover:text-purple-600 transition-colors" href="/contact">
                    Contacto
                  </Link>
                </nav>
                <div className="mt-auto pt-4 border-t">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Nuestra Historia</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Target className="mr-2 h-6 w-6 text-purple-600" />
              Nuestra Misión
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                Nuestra empresa tiene como propósito ayudar a las personas a mejorar su administración
                 financiera personal mediante inteligencia artificial, ofreciendo una solución intuitiva
                  y personalizada. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                Brindamos herramientas digitales accesibles y seguras para gestionar 
                  ingresos, gastos y ahorros, con recomendaciones automatizadas y estrategias financieras
                   adaptadas a cada usuario.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Compass className="mr-2 h-6 w-6 text-purple-600" />
              Nuestra visión
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                Aspiramos a ser un referente en tecnología financiera en Latinoamérica, 
                expandiéndonos a nivel global y estableciendo alianzas con instituciones 
                financieras para fomentar la inclusión y educación financiera. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                Queremos ser reconocidos por la transparencia, innovación, accesibilidad 
                y responsabilidad financiera, proporcionando una mejor calidad de vida
                 a nuestros clientes a través de decisiones económicas informadas y efectivas.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <MapPin className="mr-2 h-6 w-6 text-purple-600" />
           Nuestra Ubicación
            </h2>
            <Card>
            <CardContent className="pt-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-lg font-semibold mb-2">Sede</h3>
      <p className="text-gray-700">
        Blvd. Gustavo Díaz Ordaz 12649-2G  
        <br />
        Segundo piso
        <br />
        El Paraiso
        <br />
        22106 Tijuana, B.C.
      </p>
      <p className="text-gray-700 mt-4">
        <strong>Teléfono:</strong> +52 664 2229834
        <br />
        <strong>Email:</strong> Finmateai@gmail.com
      </p>
    </div>
  </div>

  {/* Mapa Interactivo */}
  <div className="mt-6 rounded-lg overflow-hidden border h-[300px] bg-gray-100 flex items-center justify-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.9204745023365!2d-117.0245643!3d32.5081941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94eaafaa7662f%3A0xc95d69f2d565be9b!2sBlvd.%20Gustavo%20Diaz%20Ordaz%2012649%2C%20El%20Para%C3%ADso%2C%2022106%20Tijuana%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1711319053853!5m2!1ses-419!2smx"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Nuestro Viaje</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>15-01-2025</CardTitle>
                  <CardDescription>El Inicio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                  Fundada por un equipo de Estudiantes universitarios con la visión de transformar el asesoramiento financiero
                  a través de la tecnología.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>20-02-2025</CardTitle>
                  <CardDescription>Crecimiento e Innovación</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                  Lanzamos nuestra primera plataforma de asesoramiento financiero impulsada por IA y obtuvimos fondos de la Serie A para acelerar
                  desarrollo y expansión.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>28-02-2025</CardTitle>
                  <CardDescription>Soluciones Empresariales</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                  Ampliamos nuestros servicios para incluir soluciones empresariales, ayudando a las empresas a optimizar sus finanzas
                  operaciones y proporcionar mejores beneficios financieros a los empleados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hoy</CardTitle>
                  <CardDescription>Impacto</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                  Sirviendo a clientes  con servicios de asesoramiento financiero de IA de última generación
                  innovando continuamente para mejorar los resultados financieros para individuos y empresas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

