'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import LoginButton from '../LoginButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <LoginButton
          key={id}
          text={`로그인 ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size='big'
        />
      ))}
    </>
  );
}
