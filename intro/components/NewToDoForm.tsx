import { newTodo } from '@/utils/actions'

const NewToDoForm = () => {

  return (
    <div>
        <form action={newTodo}>
          <input name='content' type='text' placeholder='buy milk' className='border border-black'/>
          <button type='submit'>create</button>
        </form>
    </div>
  )
}

export default NewToDoForm