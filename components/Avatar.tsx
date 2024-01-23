export default function Avatar({
  image,
  size = 'normal',
  highlight = false,
}: {
  image?: string | null;
  size: 'small' | 'normal';
  highlight?: boolean;
}) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white p-[0.1rem] rounded-full ${getImageSizeStyle(
          size
        )}`}
        src={image ?? undefined}
        alt='프로필'
        referrerPolicy='no-referrer'
      ></img>
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-[#71C9CE] to-[#FFE5FF] transition ease-in-out hover:-translate-y-1 p-1'
    : '';
  const sizeStyle = size === 'small' ? 'w-12 h-12' : 'w-[68px] h-[68px]';
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === 'small' ? 'w-[40px] h-[40px]' : 'w-[60px] h-[60px]';
}
