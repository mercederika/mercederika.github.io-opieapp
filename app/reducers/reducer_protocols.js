// reducer that returns a piece of application state
export default function () {
  return [
    { static: 'Static', selected: false},
    { dynamic: 'Dynamic', selected: false},
    { turn: 'Turn', selected: false}
  ]
}
