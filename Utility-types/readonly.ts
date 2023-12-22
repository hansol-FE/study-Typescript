{
  /**
   * 웬만한 사용가능한 utility type은 typescript에 이미 포함되어 있음.
   * 불변성을 보장하는 readonly 사용 예제.
   */
  type Todo = {
    title: string;
    desc: string;
  };

  function display(todo: Readonly<Todo>) {
    //todo.title = 'update' // 수정 불가
  }
}
