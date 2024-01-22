export default function Avatar({ image }: { image?: string | null }) {
  return (
    <div className='w-12 h-12 p-1 rounded-full bg-gradient-to-bl from-[#71C9CE] to-[#FFE5FF] transition ease-in-out hover:-translate-y-1'>
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='rounded-full '
        src={image ?? undefined}
        alt='프로필'
        referrerPolicy='no-referrer'
      ></img>
    </div>
  );
}
