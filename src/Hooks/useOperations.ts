import React, { useState } from "react";
import { ItemList } from "../Interface/DTO/ItemList";
import { RepositoryTodoList } from "../Repository/RepositoryTodoList";

function useOperations() {
  let [List, setList] = useState<ItemList[]>([
    {
      id: 1,
      name: "Jugar Futbol",
    },
    {
      id: 2,
      name: "Hacer Tareas",
    },
    {
      id: 3,
      name: "Estudiar lecciones",
    },
    {
      id: 4,
      name: "Cocinar",
    },
  ]);
  function AddItem(description: string) {
    const autoGenerateId = List.length + 1;

    setList([...List, { id: autoGenerateId, name: description }]);
  }

  function DeleteItemId(Id: number) {
    setList(List.filter((item) => item.id !== Id));
  }

  function GetItems(): ItemList[] {
    console.log(List);
    return List;
  }
  return {
    AddItem,
    DeleteItemId,
    GetItems,
  };
}

export default useOperations;
