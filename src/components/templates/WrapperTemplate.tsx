import type { IWrapperTemplateProps } from '../../types/ui/WrapperTemplate';

export default function WrapperTemplate({
  filter,
  list,
  form,
}: IWrapperTemplateProps) {
  return (
    <div className='w-[400px] max-w-full m-auto h-screen py-6'>
      <div className='border border-gray-200 p-6 rounded-2xl flex flex-col gap-5 h-full'>
        {filter && <div className='mb-4'>{filter}</div>}
        {list && <div className='flex-1'>{list}</div>}
        {form && (
          <>
            <div className='h-[1px] bg-gray-200'></div>

            {form}
          </>
        )}
      </div>
    </div>
  );
}
