export default function Tasks() {
  return (
    <div>
      Tasks
      <div className="border my-">
        <p>quick Actions</p>
        <ul>
          <li>new task</li>
          <li>delete tasks</li>
          <li>add participant</li>
        </ul>
      </div>
      <div className="border my-4">
        -- list of tasks --
        <ul>
          <li>task 1</li>
          <li>task 2</li>
          <li>task 3</li>
          <li>task 4</li>
          <li>task 5</li>
        </ul>
      </div>
      <div className="border my-4">
        <p>Statistics</p>
        charts here
      </div>
    </div>
  );
}
