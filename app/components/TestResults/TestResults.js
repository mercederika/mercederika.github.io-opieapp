import React from 'react'
import ResultsTable from '../ResultsTable/ResultsTable'
import TextField from '../Test/TextField'
import IconBar from '../IconBar/IconBar'
import Title from '../Title'

const TestResults = (props) => {
  return (
    <div className='result-footer'>
      <Title title='Test Results'/>
      <div className='test-results-container'>
        <ResultsTable />
        <TextField label='Test Result Statement'/>
      </div>
      <IconBar />
    </div>
  )
}

export default TestResults
