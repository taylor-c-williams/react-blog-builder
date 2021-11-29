import React from 'react'
import { useState } from 'react'

import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'

import './Home.css'

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('title')
  const [subtitle, setSubtitle] = useState('subtitle')
  const [font, setFont] = useState('font')
  const [align, setAlign] = useState('align')
  const [text, setText] = useState('text')

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        font={font}
        setFont={setFont}
        align={align}
        setAlign={setAlign}
        text={text}
        setText={setText}
      />

      <Editor
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        font={font}
        setFont={setFont}
        align={align}
        setAlign={setAlign}
        text={text}
        setText={setText}
      />
    </main>
  )
}
