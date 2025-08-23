import { ContainerTemplate } from '@components/templates';
import { TodosList } from '@components/organisms';
import { AddTodoForm } from '@components/molecules';
import { Loading } from '@components/molecules';
import { ErrorMessage } from '@components/molecules';
import { TodosHeader } from '@components/organisms';
import { useTodosContext } from './hooks/todosContext';

function AppContainer() {
  const todos = useTodosContext();

  return (
    <ContainerTemplate
      header={<TodosHeader />}
      list={
        <>
          {todos.status === 'loading' && <Loading placeholder='Loading...' />}
          {todos.status === 'failed' && (
            <ErrorMessage
              message='Something went wrong...'
              onRetry={() => void todos.refetch()}
            />
          )}
          {todos.status === 'ready' && <TodosList />}
        </>
      }
      form={<AddTodoForm />}
    />
  );
}

export default AppContainer;
