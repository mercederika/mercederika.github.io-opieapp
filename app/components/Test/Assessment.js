import React from 'react'
import ReactDOM from 'react-dom'
import TextField from './TextField'

const options = [
  {
    label: 'Test Protocol',
    slug: 'selectedProtocol',
    options: [
      { item : 'Static' },
      { item : 'Dynamic' },
      { item : 'Turn' }
    ]
  },
  {
    label: 'Walking Pace',
    slug: 'walkingPace',
    options: [
      { item : 'Usual' },
      { item : 'Comfortable' },
      { item : 'Fast' }
    ]
  },
  {
    label: 'Verbal Assistance',
    slug: 'verbalAssistance',
    options: [
      { item : 'No' },
      { item : 'Yes' }
    ]
  },
  {
    label: 'Assistive Device',
    slug: 'assistiveDevice',
    options: [
      { item : 'None' },
      { item : 'Other' }
    ]
  }
]


const Title = (props, index) => {
  return (
    <div className='option-title' key={index}>
      <strong>{props.label}</strong>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.selected ? 'button selected' : 'button'} key="props.label">{props.label}</button>
  )
}

const Assessment = ({updatedButtonChoice, selectedProtocol, walkingPace, verbalAssistance, assistiveDevice}) => {

  let rows = {
    selectedProtocol: selectedProtocol,
    walkingPace: walkingPace,
    verbalAssistance: verbalAssistance,
    assistiveDevice: assistiveDevice
  }

  return (
    <div className='assessment-container'>
      <div className='assessment'>
        {options.map ((option, index) => {
          var buttons = option.options
          var slug = option.slug
          return (
            <div className='assessment-item' key={index}>
              <Title label={option.label} key={option.label} />
              <div className='assessment-buttons' key={index + 1}>
                {buttons.map((button, index) => {
                  return (
                    <Button
                      label={button.item}
                      key={button.item}
                      selected={rows[slug] === button.item}
                      onClick={() => {
                        console.log(button.item)
                        updatedButtonChoice(slug, button.item)
                      }} />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Assessment
