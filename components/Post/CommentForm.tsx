export default function CommentForm() {
  return (
    <>
      <form className='flex w-full'>
        <input
          className='outline-none border-b w-full p-2'
          type='text'
          placeholder='댓글 달기...'
        />
        <button className='text-sky-500 font-bold'>작성</button>
      </form>
    </>
  );
}
