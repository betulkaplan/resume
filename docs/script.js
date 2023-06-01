const frontendSkills = [
  { skill: "Typscript", level: 4 },
  { skill: "React.js", level: 5 },
  { skill: "Next.js", level: 4 },
  { skill: "Prisma", level: 4 },
  { skill: "Cypress", level: 4 },
  { skill: "Chakra UI", level: 4 },
  { skill: "Figma", level: 4 },
  { skill: "Angular", level: 3 },
];
const backendSkills = [
  { skill: "Java", level: 3 },
  { skill: "Spring Boot", level: 4 },
  { skill: "Python", level: 5 },
  { skill: "Django", level: 5 },
  { skill: "Django Rest Framework", level: 5 },
  { skill: "Celery", level: 4 },
  { skill: "Node.js", level: 4 },
  { skill: "Functional Programming", level: 4 },
  { skill: "PostgresSQL", level: 4 },
];

frontend_skills_list = document.querySelector("#skills-ul-fe");
backend_skills_list = document.querySelector("#skills-ul-be");

function generateLevelIndicator(level) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("flex", "items-center");
  const wrapper2 = document.createElement("div");
  wrapper2.classList.add("flex");

  [1, 2, 3, 4, 5].forEach((i, index) => {
    const element = document.createElement("div");
    element.classList.add("mr-1");

    const square = document.createElement("div");
    const bgColor = index < level ? "bg-gray-600" : "bg-gray-400";
    square.classList.add("w-4", "h-4", "border-2", "border-gray-600", bgColor);

    element.appendChild(square);
    wrapper2.appendChild(element);
  });

  wrapper.appendChild(wrapper2);
  return wrapper;
}

frontendSkills
  .sort((a, b) => b.level - a.level)
  .forEach(({ skill, level }) => {
    const newContent = document.createElement("li");
    newContent.classList.add(
      "px-2.5",
      "mr-1.6",
      "mb-1.6",
      "text-base",
      "text-gray-750",
      "print:bg-white",
      "print:border-inset",
      "bg-gray-200",
      "flex",
      "justify-between"
    );
    newContent.innerText = skill;
    newContent.appendChild(generateLevelIndicator(level));

    frontend_skills_list.appendChild(newContent);
  });

backendSkills
  .sort((a, b) => b.level - a.level)
  .forEach(({ skill, level }) => {
    const newContent = document.createElement("li");
    newContent.classList.add(
      "px-2.5",
      "mr-1.6",
      "mb-1.6",
      "text-base",
      "text-gray-750",
      "print:bg-white",
      "print:border-inset",
      "bg-gray-200",
      "flex",
      "justify-between"
    );
    newContent.innerText = skill;
    newContent.appendChild(generateLevelIndicator(level));

    backend_skills_list.appendChild(newContent);
  });
