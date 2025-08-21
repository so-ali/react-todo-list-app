import { useTodoQuery } from './hooks/todoQuery';
import WrapperTemplate from './components/templates/WrapperTemplate';
import TodosList from './components/organisms/TodosList';
import AddTodoForm from './components/molecules/AddTodoForm';
import Filter from './components/molecules/Filter';
function App() {
  const { getList, addItem, removeItem } = useTodoQuery({
    limit: 30,
    offset: 0,
  });

  return (
    <WrapperTemplate
      filter={<Filter />}
      list={<TodosList />}
      form={<AddTodoForm />}
    />
  );
}

export default App;
