'use client'

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react'

import { URL_API } from '../../utils/constants';
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';

const DialogDemo = () => {

    const [Name, setName] = useState<string>();
    const [Email, setEmail] = useState<string>();
    const [Cpf, setCpf] = useState<string>();
    const [Contact, setContact] = useState<string>();

    const { data: session } = useSession();
    const router = useRouter();

    // const updateUser = async (e: any) => {
    //     e.preventDefault();
    //     const res = await fetch(`${URL_API}/clients/d1552c06-c90e-467e-a226-10ff6f6197e8`, {
    //       method: 'PUT',
    //       body: JSON.stringify({
    //         name: Name,
    //         email: Email,
    //         cpf: Cpf,
    //         contact: "+55" + Contact,
    //       }),
    //     });
  
    //     if(res.ok){
    //       router.push("/dashboard");
    //     }
    //   }

    return ( 
        
        <Dialog.Root>
            <Dialog.Trigger asChild>
            <button className="text-white shadow-blackA7 hover:bg-slate-700 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                Editar perfil
            </button>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-black m-0 text-[17px] font-medium">
                Edite seu perfil
                </Dialog.Title>
                <Dialog.Description className="text-black mt-[10px] mb-5 text-[15px] leading-normal">
                    Você está prestes a alterar seu perfil
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="text-black w-[90px] text-right text-[15px]" htmlFor="email">
                        Nome
                    </label>
                    <input
                        className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="name"
                        name='name'
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        placeholder={session?.user.name}
                    />
                </fieldset>

                <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="text-black w-[90px] text-right text-[15px]" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="email"
                        name='email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={session?.user.email}
                    />
                </fieldset>

                <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-black w-[90px] text-right text-[15px]" htmlFor="username">
                    CPF
                </label>
                <input
                    className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="cpf"
                    name='cpf'
                    type='text'
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder={session?.user.cpf}
                />
                </fieldset>

                <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="text-black w-[90px] text-right text-[15px]" htmlFor="contact">
                        Telefone
                    </label>
                    <input
                        className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="contact"
                        name="contact"
                        type='text'
                        onChange={(e) => setContact(e.target.value)}
                        placeholder={session?.user.contact}
                    />
                </fieldset>

                <div className="mt-[25px] flex justify-end">
                    <Dialog.Close asChild>
                        <button 
                            type='submit' 
                            className="bg-green-400 text-green-600 hover:bg-green-500 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                        Save changes
                        </button>
                    </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                <button
                    className="text-red-500 hover:bg-red-600 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                >
                    <Cross2Icon />
                </button>
                </Dialog.Close>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default DialogDemo;