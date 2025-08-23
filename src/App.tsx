import ContainerTemplate from './components/templates/ContainerTemplate';
import TodosList from './components/organisms/TodosList';
import AddTodoForm from './components/molecules/AddTodoForm';
import Loading from './components/molecules/Loading';
import ErrorMessage from './components/molecules/ErrorMessage';
import TodosHeader from './components/organisms/TodosHeader';
import { useTodosContext } from './context/TodosContext';

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
              onRetry={() => todos.refetch()}
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
