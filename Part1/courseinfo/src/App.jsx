

const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props) => {
  return (
    <div className="TotalWrapper">
      Total:{props.total}
    </div>
  );
}


const Part = (props) => {

  return (
    <div className="PartWrapper">
      {props.part.name}
    </div>
  );

}

const Content = (props) => {

  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.length} />
    </div>
  )
}

export default App