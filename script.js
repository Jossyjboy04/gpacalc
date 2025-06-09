const courseInput = document.getElementById('course');
const gradeSelect = document.getElementById('grade');
const unitInput = document.getElementById('unit');
const addButton = document.getElementById('add');
const courseBody = document.getElementById('course-body');
const calculateButton = document.getElementById('calculate');
const gpaElement = document.getElementById('gpa');

let courses = [];

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const course = courseInput.value;
  const grade = gradeSelect.value;
  const unit = parseInt(unitInput.value);

  const gradePoints = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
  };

  const gradePoint = gradePoints[grade];

  courses.push({
    course,
    grade,
    unit,
    gradePoint,
  });

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${course}</td>
    <td>${grade}</td>
    <td>${unit}</td>
    <td>${gradePoint}</td>
    <td><button class="remove">Remove</button></td>
  `;

  const removeButton = row.querySelector('.remove');
  removeButton.addEventListener('click', () => {
    row.remove();
    courses = courses.filter((c) => c.course !== course);
    calculateGPA();
  });

  courseBody.appendChild(row);

  courseInput.value = '';
  unitInput.value = '';
});

calculateButton.addEventListener('click', calculateGPA);

function calculateGPA() {
  let totalGradePoints = 0;
  let totalUnits = 0;

  courses.forEach((course) => {
    totalGradePoints += course.gradePoint * course.unit;
    totalUnits += course.unit;
  });

  const gpa = totalGradePoints / totalUnits;

  gpaElement.textContent = `GPA: ${gpa.toFixed(2)}`;
}