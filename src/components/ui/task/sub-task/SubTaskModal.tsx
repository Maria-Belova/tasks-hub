import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toast } from 'sonner';
import { Input } from '../../input';
import { Button } from '../../button';
import { BaseModal } from '@/components/modals/BaseModal';
import { taskStore } from '@/stores/task.store';
import { X } from 'lucide-react';

interface ISubTaskModal {
  taskId: string;
  closeModal: () => void;
}

export const SubTaskModal = observer(({ taskId, closeModal }: ISubTaskModal) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) {
      return;
    }

    taskStore.addSubTask(taskId, { title });
    setTitle('');
    toast.success('Subtask added successfully');
    closeModal();
  };

  return (
    <BaseModal>
      <h2 className='mb-4 text-lg font-bold'>Create Subtask</h2>
      <Input placeholder='Subtask title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button className='mt-4' onClick={handleAdd}>Create Subtask</Button>
      <X
        className='absolute right-6 top-6 text-gray-400 hover:text-gray-600 cursor-pointer'
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
      />
    </BaseModal>
  );
});
