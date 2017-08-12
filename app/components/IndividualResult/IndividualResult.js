import React from 'react'
import LabelBar from './LabelBar'
import IconBar from '../IconBar/IconBar'
import Title from '../Title'

const IndividualIcons = ({editTest, deleteTest}) => {
  return (
    <div className='individual-icons'>
      <button className='icon' onClick={editTest}>
        <i className="material-icons">create</i>
      </button>
      <button className='icon delete' onClick={deleteTest}>
        <i className="material-icons">clear</i>
      </button>
    </div>
  )
}

const IndividualRow = ({index, test, deleteTest, editTest}) => {
  const editIndividualTest = () => {
    editTest(test.id)
  }

  const deleteIndividualTest = () => {
    deleteTest(test.id)
  }

  return (
    <div className='result-row'>
      <div className='result-label numb'>{index + 1}</div>
      <div className='result-item'>{Math.round((10/test.value + 0.00001) * 100) / 100}</div>
      <div className='result-item'>--</div>
      <div className='result-item'>{test.value}</div>
      <IndividualIcons editTest={editIndividualTest} deleteTest={deleteIndividualTest} />
    </div>
  )
}

const IndividualResult = ({tests, calculatedTestResults, deleteTest, editTest}) => {
  return (
    <div className='indivdual-result-container'>
      <Title title='Individual Results'/>
      <div className='individual-row-container'>
        <LabelBar />
        {tests.map((test, index) => {
          return <IndividualRow
            key={test.id}
            test={test}
            index={index}
            deleteTest={deleteTest}
            editTest={editTest}/>
        })}
      </div>
    </div>
  )
}

export default IndividualResult
