"use client"

export const metadata = {
    title: 'Cadastro - Compressor | Zeta',
    description: 'Page description',
  }

  import Link from 'next/link'
  import { AwsClient } from 'aws4fetch';
  import { useState } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import HeaderExp from '../../../components/ui/headerExp'
  
  export default function SignUp() {

    const [outputName, setOutputName] = useState('');
    const [outputEmail, setOutputEmail] = useState('');
    const [outputCpf, setOutputCpf] = useState('');
    const [outputNumber, setOutputNumber] = useState('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
      setOutputNumber(value);
    }


    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      setOutputCpf(value);
    }

    const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY ?? '';
    const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_KEY ?? '';
    const url = process.env.NEXT_PUBLIC_AWS_URL_CLIENTS ?? '';
    const region = process.env.NEXT_PUBLIC_AWS_REGION ?? '';
    const Origin = process.env.NEXT_PUBLIC_AWS_ORIGIN;
  
    function FormRequisicao() {
      async function fetchData() {
        const options = {
          method: 'POST',
          Origin,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: outputName,
            email: outputEmail,
            cpf: outputCpf,
            contact: outputNumber,
          }),
        };
        const aws = new AwsClient({
          accessKeyId,
          secretAccessKey,
          service: 'execute-api',
          region,
        });
          aws.fetch(url, options).then(response => {
          response.json().then(data => {
            const status = response.status;
            console.log(status)
            if (status == 201) {
              toast.success('Cadastro realizado com sucesso!');
            } else if (status == 409) {
              toast.error('Este email já foi registrado. ');
            } else {
              toast.error('Houve um problema ao realizar o cadastro. Por favor, tente novamente mais tarde!');
            }
          });
        });
      }
      fetchData();
    }
    return (
      <header>
        <HeaderExp />
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
    
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1" data-aos="fade-up" data-aos-delay="160">Bem-vindo. Existimos para facilitar o crescimento do seu empreendimento.</h1>
              </div>
    
              {/* Form */}
              <div className="max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="200">
                <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-400">Or, register with your email</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Nome<span className="text-red-600">*</span></label>
                      <input id="full-name" onChange={(e) => setOutputName(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Primeiro nome" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" onChange={(e) => setOutputEmail(e.target.value)}  className="form-input w-full text-gray-300" placeholder="you@gmail.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">CPF<span className="text-red-600">*</span></label>
                      <input id="company-name" type="text" onChange={(e) => handleCpfChange(e)} value={outputCpf} className="form-input w-full text-gray-300" placeholder="Seu CPF" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Telefone<span className="text-red-600">*</span></label>
                      <input id="company-name" onChange={(e) => handlePhoneChange(e)} type="text" value={outputNumber} className="form-input w-full text-gray-300" placeholder="Seu telefone para contato" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Senha <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Senha (10 caracteres)" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Confirme a senha <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Confirme sua senha" required />
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    Concordo em ser contatado pela Zeta Tecnologia sobre esta oferta de acordo com a Política de Privacidade da Zeta. <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Política de Privacidade</Link>.
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button type='button' onClick={FormRequisicao} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 text-center mt-6">
                  Já usa o Compressor | Zeta? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
                </div>
              </div>
    
            </div>
          </div>
          <ToastContainer />
        </section>
      </header>
    )
  }