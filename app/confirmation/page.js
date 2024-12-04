import Link from "next/link"
import Logo from "../components/Logo"


const ConfirmationPage = () => {
    return (
      <main className=' my-[130px]'>
          <div className='max-w-5xl mx-auto card  flex flex-col'>
            <div className='w-full flex bg-slate-900 text-slate-100 p-5 border-b-4 border-orange-700'>
                <Logo />
            </div>
            <div className="p-5 flex flex-col gap-4">
              <p className='text-5xl font-black'>Gracias por suscribirte.</p>
              <p className='text-lg'>Por favor, revisa tu bandeja de entrada para confirmar tu suscripción y empezar a recibir nuestros picks directamente en tu correo.</p>
              <p className='text-lg'>Si no encuentras nuestro correo de bienvenida, revisa tu carpeta de spam.</p>
              <div className='flex'>
                <Link href='/'>
                  <div className='px-7 py-5 bg-orange-700 text-lg text-gray-200'>
                      Volver a la página principal
                  </div>
                </Link>
              </div>
            </div>
          </div>
      </main>
    )
  }
  
  export default ConfirmationPage