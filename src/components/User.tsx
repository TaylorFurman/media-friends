import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

const User: Component = () => {
    const [count, setCount] = createSignal(0);

  return (
    <div>
        <span>user</span>
       
    </div>
  );
};

export default User;