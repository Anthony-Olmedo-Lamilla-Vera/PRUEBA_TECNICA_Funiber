export interface CrudRepository<T> {
  AddItem(item: String): void;
  DeleteItem(id: Number): void;
  GetItems(): T[];
  GetById(id: Number): T;
}
