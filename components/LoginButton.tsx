type Props = {
  text: string;
  onClick: () => void;
};

export default function LoginButton({ text, onClick }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        className='rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 transition ease-in-out hover:-translate-y-1 p-1'
      >
        <div className='bg-white rounded-sm hover:opacity-80 p-1'>{text}</div>
      </button>
    </>
  );
}
