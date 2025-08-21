import Button from '../atoms/Button';

export default function Filter() {
  return (
    <div className='flex flex-row gap-2'>
      <Button size='small' style='primary'>
        All
      </Button>
      <Button size='small'>Pending</Button>
      <Button size='small'>Completed</Button>
    </div>
  );
}
