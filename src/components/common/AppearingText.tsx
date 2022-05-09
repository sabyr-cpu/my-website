import { useEffect, useState } from 'react'

function AppearingText({ text, delay, time, cursor } : { text: string, delay: number, time: number, cursor: boolean }) {
  const [textnow, setTextnow] = useState<string>('')
  const [index, setIndex] = useState<number>(0)
  const [_style, _setStyle] = useState<any>({})
  const [opacity, setOpacity] = useState<number>(0)

  useEffect(() => {
    setIndex(0)
    setTextnow('')
  }, [])

  useEffect(() => {
    async function _() {
      if (cursor) {
        await setTimeout(async () => {
          await _setStyle((s: any) => ({ ...s, opacity: opacity, transition: 'opacity 300ms linear' }))
          await setOpacity(opacity => !opacity ? 1 : 0)
        }, 800)
      }
      console.log('wtf')
    }
    _()
  }, [cursor, opacity])

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
    <span style={_style}>{textnow}</span>
  )
}

export default AppearingText