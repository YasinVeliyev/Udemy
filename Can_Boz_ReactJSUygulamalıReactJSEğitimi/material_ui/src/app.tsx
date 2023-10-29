import { useState } from 'preact/hooks'

import './app.css'
import LessonTypography from './components/LessonTypography'
import LessonButton from './components/LessonButton'
import LessonBottunGroup from './components/LessonBottunGroup'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={"App"}>
      React Uygulama
      <LessonTypography/>
      <LessonButton/>
      <LessonBottunGroup/>
    </div>
  )
}
