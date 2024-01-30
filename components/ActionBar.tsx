import { CiBookmark } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';

type Props = {
  likes: string[];
  username: string;
  text: string;
};
export default function ActionBar({ likes, username, text }: Props) {
  return (
    <>
      <div className='flex justify-between my-2'>
        <IoIosHeartEmpty size={30} />
        <CiBookmark size={30} />
      </div>
      <div className=''>
        <p className='font-semibold'>{`좋아요 ${likes?.length ?? 0}개`}</p>
        <p>
          <span className='font-semibold pr-2'>{username}</span>
          <span className=''>{text}</span>
        </p>
      </div>
    </>
  );
}
