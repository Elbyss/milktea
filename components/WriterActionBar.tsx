import parseDate from '@/util/date';
import Avatar from './Avatar';
type Props = {
  userImage: string;
  username: string;
  createdAt: string;
};
export default function WriterActionBar({
  userImage,
  username,
  createdAt,
}: Props) {
  return (
    <>
      <div className='flex items-center p-2 gap-2'>
        <Avatar image={userImage} highlight size='small' />
        <span className='font-semibold'>{username}</span>
        <p>• {parseDate(createdAt)}</p>
      </div>
    </>
  );
}
