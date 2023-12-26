{
  /**
   * 부분적으로 데이터를 수정하고 싶을 때 partial type 유용하게 사용 가능
   */
  type Todo = {
    title: string;
    desc: string;
    label: string;
    priority: "high" | "low";
  };

  /**
   * 기존의 데이터는 유지하면서 부분적인 Todo 데이터만 수정하여 새로운 Todo 반환
   */
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: Todo = {
    title: "typescript",
    desc: "learn typescript",
    label: "study",
    priority: "low",
  };

  const fixedTodo = updateTodo(todo, { priority: "high" });
}
