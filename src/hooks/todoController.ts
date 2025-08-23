import { useDispatch } from "react-redux";
import { useTodosStore } from "./store";
import { useTodoQuery } from "./todoQuery";
import type { AppDispatch } from "../store/store";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  addTodo,
  removeTodo,
  setState,
  updateTodo,
} from "../store/slices/todo";
import type { ITodoItem } from "@type/logic/TodoSlice";
import { arrayMove } from "@dnd-kit/sortable";
import type { ITodosFilters } from "@components/molecules/Filter.types";

export const useTodoController = ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  const todosStore = useTodosStore();
  const { getList, addItem, removeItem, updateItem } = useTodoQuery({
    limit,
    offset,
  });
  const dispatch = useDispatch<AppDispatch>();
  const [filters, setFiltersState] = useState<ITodosFilters>();

  const setFilters = useCallback((data: ITodosFilters) => {
    setFiltersState(data);
  }, []);

  useEffect(() => {
    if (getList.isLoading) {
      dispatch(setState({ status: "loading", todos: [] }));
    } else if (getList.isError) {
      dispatch(setState({ status: "failed", todos: [] }));
    } else if (getList.isSuccess) {
      dispatch(setState({ status: "ready", todos: getList.data }));
    }
  }, [
    dispatch,
    getList.isLoading,
    getList.isError,
    getList.isLoadingError,
    getList.isSuccess,
    getList.data,
  ]);

  const todos = useMemo(() => {
    if (!filters) return todosStore.todos;

    return todosStore.todos.filter((todo) => {
      const matchesStatus =
        filters.status === "all" ||
        todo.completed === (filters.status === "completed");

      const matchesSearch = todo.todo
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [todosStore.todos, filters]);

  const add = async (val: string) => {
    try {
      const item = await addItem.mutateAsync(val);
      dispatch(addTodo(item));
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
        status: "ready",
        todos: arrayMove(todosStore.todos, oldIndex, newIndex),
      }),
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
