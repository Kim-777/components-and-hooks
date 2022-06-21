const limits = 100;
let nowNum = 1;

export type Todo = {
  id: number;
  title: string;
  date: Date;
  contents: string;
};

export type TodoResponse = {
  data: Todo[];
  next: boolean;
};

export function MockTodo(): Todo {
  nowNum += nowNum;

  return {
    id: nowNum,
    title: `title ${nowNum}`,
    date: new Date(),
    contents: `contents ${nowNum}`,
  };
}

export function MockTodos(
  offset: number,
  limit: number
): Promise<TodoResponse> {
  return new Promise((resolve) => {
    const response = {
      data: [],
      next: true,
    } as TodoResponse;

    if (limits <= offset + limit) {
      response.next = false;
      for (let x = 0; x < limits - offset; x++) {
        response.data.push(MockTodo());
      }

      resolve(response);
    }

    for (let x = 0; x < limit; x++) {
      response.data.push(MockTodo());
    }

    resolve(response);
  });
}

export function fetchUserById(id = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "테스트 유저 입니다.",
        id,
        description: "테스트를 위해 만들어진 객체입니다 저는.",
      });
    }, 3000);
  });
}
