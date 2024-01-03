import { getServerSession } from 'next-auth';
import { handler } from '../api/auth/[...nextauth]/route';
import { getProviders } from 'next-auth/react';
import SignIn from '@/components/ui/SignIn';
import { redirect } from 'next/navigation';
type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
export default async function SigninPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(handler);
  if (session) {
    console.log(session);
    redirect('/');
  }
  const providers = (await getProviders()) ?? {};
  return (
    <section className='flex justify-center mt-[10%]'>
      <SignIn providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
}
