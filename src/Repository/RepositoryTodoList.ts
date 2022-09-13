import { ItemList } from "../Interface/DTO/ItemList";
import { CrudRepository } from "../Interface/MethodsRepository";

export class RepositoryTodoList implements CrudRepository<ItemList> {
  private ListTodo: ItemList[] = [
    {
      id: 1,
      name: "Jose",
    },
    {
      id: 2,
      name: "Carlos",
    },
    {
      id: 3,
      name: "Anthonio",
    },
    {
      id: 4,
      name: "Jaime",
    },
  ];

  AddItem(item: string): void {
    let autoGenerateId = this.ListTodo.length + 2;

    console.log(this.ListTodo);
    this.ListTodo.push({
      id: autoGenerateId,
      name: item,
    });
  }
  DeleteItem(id: Number): void {
    this.ListTodo = this.ListTodo.filter((items) => items.id !== id);
  }
  GetItems(): ItemList[] {
    return this.ListTodo!;
  }
  GetById(id: Number): ItemList {
    return this.ListTodo.find((item) => item.id === id)!;
  }
}
