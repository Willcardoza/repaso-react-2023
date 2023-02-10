import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleClick = () => {
    setEnabled(!enabled)
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    console.log('efecto', { enabled })

    // función que detecta la posición del cursor
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMov', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    // cnfirma si el boton esta activo
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup: se encarga de limpiar el componente
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={handleClick}>
        {enabled ? 'Desactivar' : 'Activar'} seguir Puntero
      </button>
    </main>
  )
}

export default App
