type Props = {
  text: string;
  onClick: () => void;
  size: 'small' | 'big';
};

export default function LoginButton({ text, onClick, size = 'small' }: Props) {
  return (
    <>
      <div
        className={`rounded-md bg-gradient-to-bl from-[#71C9CE] to-[#FFE5FF] transition ease-in-out hover:-translate-y-1 p-1
        ${size === 'big' ? 'p-2' : 'p-1'}`}
      >
        <button
          className={`bg-white rounded-sm hover:opacity-70 p-1 transition ease-in-out
          ${size === 'big' ? 'p-2 text-2xl' : 'p-1'}`}
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    </>
  );
}
