export default function () {
  return {
    items:[
      {
        label: 'Test Protocol',
        options: [
          { item : 'Static', selected: false },
          { item : 'Dynamic', selected: false },
          { item : 'Turn', selected: false }
        ]
      },
      {
        label: 'Walking Pace',
        options: [
          { item : 'Usual', selected: false },
          { item : 'Comfortable', selected: false },
          { item : 'Fast', selected: false }
        ]
      },
      {
        label: 'Verbal Assistance',
        options: [
          { item : 'No', selected: false },
          { item : 'Yes', selected: false }
        ]
      },
      {
        label: 'Assistive Device',
        options: [
          { item : 'None', selected: false },
          { item : 'Other', selected: false }
        ]
      }
    ]
  }
}
