function generateTask() {
  const namesInput = document.getElementById("names").value;
  const tasksInput = document.getElementById("tasks").value;

  let people = namesInput
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name);
  let tasks = tasksInput
    .split(",")
    .map((task) => task.trim())
    .filter((task) => task);

  if (people.length < 2) {
    document.getElementById("result").textContent =
      "❗ Please enter at least two names.";
    return;
  }

  if (tasks.length === 0) {
    document.getElementById("result").textContent =
      "❗ Please enter at least one task.";
    return;
  }

  let person1 = Math.floor(Math.random() * people.length);
  let person2 = Math.floor(Math.random() * people.length);

  while (person1 === person2) {
    person2 = Math.floor(Math.random() * people.length);
  }

  const task = tasks[Math.floor(Math.random() * tasks.length)];
  const message = `${people[person1]} must ${task} ${people[person2]} right now.`;

  document.getElementById("result").textContent = message;
}
