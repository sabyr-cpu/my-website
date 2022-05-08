import { useEffect, useState } from 'react'

function AppearingText({ text: string, delay: number, time: number, cursor: boolean }) {
  const [textnow, setTextnow] = useState('')
  const [index, setIndex] = useState(0)
  const [_style, _setStyle] = useState({})

  useEffect(() => {
    setIndex(0)
    setTextnow('')
    _setStyle(s => ({ ...s, opacity: 0 }))
  }, [])

  useEffect(() => {
    async function _ (){
      if (index < text.length) {
        await setTimeout(async () => {
          await setTextnow(t => t + text[index])
          await setIndex(index => index + 1)
        }, time / text.length)
      }
    }
    _()
  }, [index, time, text])


  return (
    <span style={{_style}}>{textnow}</span>
  )
}

export default AppearingText