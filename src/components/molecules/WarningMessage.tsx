import type { IWarningMessageProps } from './WarningMessage.types';

export default function WarningMessage({ message }: IWarningMessageProps) {
  return (
    <div className='flex text-sm justify-between mb-3 py-3 px-5 border border-orange-200 bg-red-100 text-orange-600 rounded-2xl'>
      {message}
    </div>
  );
}
