import React from 'react';

function TodoItem(props: {
  todo: { id: string; text: string; done: boolean };
  handleDelete: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  handleChecked: (id: string, done: boolean) => void;
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.todo.done}
          onChange={() => props.handleChecked(props.todo.id, props.todo.done)}
        />
        <input
          type="text"
          value={props.todo.text}
          onChange={(e) => props.updateTodo(props.todo.id, e.target.value)}
          disabled={props.todo.done}
        />
        <input type="submit" value="編集" />
        <button onClick={() => props.handleDelete(props.todo.id)}>削除</button>
      </label>
    </li>
  );
}

export default TodoItem;
