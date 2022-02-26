import Homepage from './components/pages/Homepage'
import TestRequirements from './components/pages/TestRequirements'
import CodeDemonstration from './components/pages/CodeDemonstration'
import StylingDemonstration from './components/pages/StylingDemonstration'
import styled from 'styled-components'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div>
      <Homepage />
      <TestRequirements />
      <CodeDemonstration />
      <StylingDemonstration />
      <Contact />
    </div>
  )
}

export default App
