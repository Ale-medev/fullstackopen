const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => (
  <li>
    {part.name} {part.exercises}
  </li>
)

const Content = ({ parts }) => (
  <ul>
    {
      parts.map(part => <Part key={part.id} part={part} />)
    }   
  </ul>
) 

const Course= ({ course }) => {

  const totalExercises = course.parts.reduce((acc, item) => acc + item.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={totalExercises} />
    </div>
  )
}

export default Course