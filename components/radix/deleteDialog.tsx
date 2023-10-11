'use client';

import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { URL_API } from '../../utils/constants';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';

const DeleteDialog = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const Origin = process.env.NEXT_PUBLIC_AWS_ORIGIN ?? '';
    const region = process.env.NEXT_PUBLIC_AWS_REGION ?? '';

    async function deletarDados() {
        const res = await fetch(`${URL_API}/clients/${session?.user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "origin": Origin,
            }
        });

        if(res.ok){
            toast.success('Conta deletada com sucesso!');
            signOut();
        }
    }
    return(
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                <button className="font-medium w-full btn btn-danger py-2 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 px-[15px] leading-none outline-none">
                    Deletar conta
                </button>
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                <AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <AlertDialog.Title className="text-black m-0 text-[17px] font-medium">
                    Você tem certeza que deseja apagar sua conta?
                    </AlertDialog.Title>
                    <AlertDialog.Description className="text-black mt-4 mb-5 text-[15px] leading-normal">
                    Essa ação não pode ser desfeita. Após concluir, você perderá todos os seus dados vinculados a conta.
                    </AlertDialog.Description>
                    <div className="flex justify-end gap-[25px]">
                    <AlertDialog.Cancel asChild>
                        <button className="text-black bg-slate-300 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        Cancel
                        </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <button onClick={deletarDados} className="text-white bg-red-600 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        Yes, delete account
                        </button>
                    </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
                </AlertDialog.Portal>
                <ToastContainer />
            </AlertDialog.Root>
        </>
    )
};

export default DeleteDialog;