import { Plus } from 'lucide-react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default function AddTodoForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='flex gap-3'>
      <Input className='flex-1' placeholder='Memorize a poem...' />
      <Button style='primary'>
        <Plus />
      </Button>
    </form>
  );
}
