import { Plus } from 'lucide-react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaAddForm } from '../../schemas/addTodoForm';
import type z from 'zod';
import { toast } from 'react-toastify';
import { useTodosContext } from '../../context/TodosContext';

export default function AddTodoForm() {
  const todosContext = useTodosContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(SchemaAddForm),
  });

  const onSubmit = async (data: z.infer<typeof SchemaAddForm>) => {
    if (isSubmitting) return;
    await todosContext.add(data.todo);
    setValue('todo', '');
    toast.dismiss();
    toast.success('Added successfully!');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (e) => toast.error(e.todo?.message))}
      className='flex gap-3 w-full'
    >
      <Input
        className='flex-1 w-[inherit]'
        placeholder='Memorize a poem...'
        {...register('todo')}
        error={errors.todo?.message}
        autoFocus
        autoComplete='off'
      />
      <Button variant='primary' error={!!errors.todo} loading={isSubmitting}>
        <Plus />
      </Button>
    </form>
  );
}
