export default function CommentForm() {
  return (
    <>
      <form className='flex w-full'>
        <input
          className='outline-none border-b w-full basis-11/12 p-2'
          type='text'
          placeholder='댓글 달기...'
        />
        <button className='basis-1/12 text-sky-500 font-bold'>작성</button>
      </form>
    </>
  );
}
