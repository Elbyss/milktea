'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import LoginButton from '../LoginButton';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Encode_Sans_Condensed } from 'next/font/google';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function SignIn({ providers, callbackUrl }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
    router.back();
  };

  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div key={id}>
          {isOpen && (
            <div className='fixed inset-0 flex items-center justify-center z-50'>
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='bg-gray-100 p-32 rounded-2xl z-10 items-center flex flex-col'>
                <LoginButton
                  key={id}
                  text={`${name}로 로그인하기`}
                  onClick={() => signIn(id, { callbackUrl })}
                  size='big'
                />
                <button
                  onClick={closeModal}
                  className='bg-gradient-to-bl from-[#71C9CE] to-[#FFE5FF] rounded-md p-2 mt-4 hover:transition-all hover:opacity-80 hover:-translate-y-[2px] border-slate-300 shadow-lg text-2xl'
                >
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
