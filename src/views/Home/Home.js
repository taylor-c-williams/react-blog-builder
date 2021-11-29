import React from 'react'
import { useState } from 'react'

import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'

import './Home.css'

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title] = useState('title')
  const [subtitle] = useState('subtitle')
  const [font] = useState('font')
  const [align] = useState('align')
  const [text] = useState('text')

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} align={align} text={text} />

      <Editor title={title} subtitle={subtitle} font={font} align={align} text={text} />
    </main>
  )
}
