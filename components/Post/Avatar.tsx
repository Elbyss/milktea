type AvatarSize = 'small' | 'medium' | 'large';

export default function Avatar({
  image,
  size = 'small',
  highlight = false,
}: {
  image?: string | null;
  size: AvatarSize;
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

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-[#71C9CE] to-[#FFE5FF] transition ease-in-out hover:-translate-y-1 p-1'
    : '';
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize): string {
  switch (size) {
    case 'small':
      return 'w-12 h-12';
    case 'medium':
      return 'w-14 h-14';
    case 'large':
      return 'w-[68px] h-[68px]';
  }
}

function getImageSizeStyle(size: AvatarSize): string {
  switch (size) {
    case 'small':
      return 'w-[40px] h-[40px]';
    case 'medium':
      return 'w-[42px] h-[42px]';
    case 'large':
      return 'w-[60px] h-[60px]';
  }
}
