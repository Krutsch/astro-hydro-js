import { reactive } from "hydro-js";

export default function Hi() {
  const count = reactive(1);

  return (
    <button onclick={() => count((val: typeof count) => val + 1)}>
      {count}
    </button>
  );
}
