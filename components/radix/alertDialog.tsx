import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { signOut } from 'next-auth/react';

const AlertDialogDemo = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="font-medium w-full  hover:text-gray-200 py-2 text-purple-600 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 px-[15px] leading-none outline-none">
        Sign Out
      </button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <AlertDialog.Title className="text-black m-0 text-[17px] font-medium">
          Você tem certeza que deseja sair?
        </AlertDialog.Title>
        <AlertDialog.Description className="text-black mt-4 mb-5 text-[15px] leading-normal">
          Ao aceitar, você será desconectado de sua conta.
        </AlertDialog.Description>
        <div className="flex justify-end gap-[25px]">
          <AlertDialog.Cancel asChild>
            <button className="text-red-600 bg-red-400 hover:bg-red-800 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Cancelar
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button onClick={() => signOut()} className="text-blue-600 bg-blue-400 hover:bg-blue-800 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Sim, desconectar.
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogDemo;