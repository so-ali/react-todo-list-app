import { useDispatch } from 'react-redux';
import { useTodosStore } from './store';
import { useTodoQuery } from './todoQuery';
import type { AppDispatch } from '../store/store';
import { useEffect, useMemo, useState } from 'react';
import {
  addTodo,
  removeTodo,
  setState,
  updateTodo,
} from '../store/slices/todo';
import type { ITodosFilters } from '../types/ui/TodosHeader';
import type { ITodoItem } from '../types/logic/TodoSlice';
import { arrayMove } from '@dnd-kit/sortable';

export const useTodoController = () => {
  const todosStore = useTodosStore();
  const { getList, addItem, removeItem, updateItem } = useTodoQuery({
    limit: 30,
    offset: 0,
  });
  const dispatch = useDispatch<AppDispatch>();
  const [filters, setFilters] = useState<ITodosFilters>();

  useEffect(() => {
    if (getList.isLoading) {
      dispatch(setState({ status: 'loading', todos: [] }));
    } else if (getList.isError) {
      dispatch(setState({ status: 'failed', todos: [] }));
    } else if (getList.isSuccess && getList.data) {
      dispatch(setState({ status: 'ready', todos: getList.data }));
    }
  }, [
    dispatch,
    getList.isLoading,
    getList.isError,
    getList.isSuccess,
    getList.data,
  ]);

  const todos = useMemo(() => {
    if (!todosStore.todos) return [];
    if (!filters) return todosStore.todos;

    return todosStore.todos.filter((todo) => {
      const matchesStatus =
        filters.status === 'all' ||
        todo.completed === (filters.status === 'completed');

      const matchesSearch = todo.todo
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
    //.sort((a) => ('all' === filters.status && a.completed ? 0 : -1));
  }, [todosStore.todos, filters]);

  const add = async (val: string) => {
    try {
      const item = await addItem.mutateAsync(val);
      dispatch(addTodo(item as ITodoItem));
    } catch (e) {
      console.error(e);
    }
  };
  const remove = async (id: number) => {
    try {
      await removeItem.mutateAsync(id);
      dispatch(removeTodo(id));
    } catch (e) {
      console.error(e);
    }
  };
  const toggle = async (item: ITodoItem) => {
    try {
      await updateItem.mutateAsync(item);
      dispatch(updateTodo(item));
    } catch (e) {
      console.error(e);
    }
  };
  const sort = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    dispatch(
      setState({
        status: 'ready',
        todos: arrayMove(todosStore.todos, oldIndex, newIndex),
      })
    );
  };

  return {
    status: todosStore.status,
    todos,
    setFilters,
    filters,
    refetch: getList.refetch,
    add,
    remove,
    toggle,
    sort,
  };
};
