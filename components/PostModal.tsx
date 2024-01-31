import { CgClose } from 'react-icons/cg';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className='fixed inset-0 flex flex-col justify-center items-center w-full h-full bg-black text-white opacity-30 z-50'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className='fixed top-0 right-0 p-8 text-white'
        onClick={() => onClose()}
      >
        <CgClose />
      </button>
      {children}
    </section>
  );
}
