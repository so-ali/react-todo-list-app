import SearchForm from "../molecules/SearchForm";
import Filter from "../molecules/Filter";
import { useEffect, useState } from "react";
import type { IFilterValues } from "@components/molecules/Filter.types";
import { useTodosContext } from "../../hooks/todosContext";

export default function TodosHeader() {
  const { setFilters, status: storeStatus } = useTodosContext();
  const [status, setStatus] = useState<IFilterValues>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status.length || search.length) {
      setFilters({ status, search });
    }
  }, [status, search, setFilters]);
  return (
    <div className="flex gap-3 items-center relative">
      <SearchForm
        value={search}
        onChange={setSearch}
        disabled={storeStatus !== "ready"}
      />
      <div className="h-5 bg-gray-200 w-[1px]"></div>
      <Filter
        value={status}
        onChange={setStatus}
        disabled={storeStatus !== "ready"}
      />
    </div>
  );
}
