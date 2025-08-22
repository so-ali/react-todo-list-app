import ContainerTemplate from './components/templates/ContainerTemplate';
import TodosList from './components/organisms/TodosList';
import AddTodoForm from './components/molecules/AddTodoForm';
import Loading from './components/molecules/Loading';
import ErrorMessage from './components/molecules/ErrorMessage';
import TodosHeader from './components/organisms/TodosHeader';
import { useTodoController } from './hooks/todoController';
function AppContainer() {
  const todoController = useTodoController();

  return (
    <ContainerTemplate
      header={<TodosHeader onFilter={todoController.setFilters} />}
      list={
        <>
          {todoController.status === 'loading' && (
            <Loading placeholder='Loading...' />
          )}
          {todoController.status === 'failed' && (
            <ErrorMessage
              message='Something went wrong...'
              onRetry={() => todoController.refetch()}
            />
          )}
          {todoController.status === 'ready' && todoController.todos && (
            <TodosList
              list={todoController.todos}
              onToggle={(item) => todoController.toggle(item)}
              onDelete={(id) => todoController.remove(id)}
              onSort={(sort) => todoController.sort(sort)}
              enabledSort={
                todoController.filters?.status === 'all' &&
                todoController.filters?.search === ''
              }
            />
          )}
        </>
      }
      form={<AddTodoForm onAdd={(val) => todoController.add(val)} />}
    />
  );
}

export default AppContainer;
