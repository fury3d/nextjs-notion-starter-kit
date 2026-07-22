import * as React from 'react'

export const NotionPageHeader = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '12px 24px',
      backgroundColor: '#2f3438', // Cor escura atual
      borderBottom: '1px solid #3a3f42'
    }}>
      {/* Esquerda: Logo */}
      <img src="/vivaicon2.png" alt="Logo" style={{ height: '50px', objectFit: 'contain' }} />

      {/* Centro: Título */}
      <h1 style={{ 
        color: '#00E5C5', 
        fontSize: '22px', 
        fontWeight: '900', 
        margin: 0,
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        textAlign: 'center'
      }}>
        PORTAL DA TRANSPARÊNCIA
      </h1>

      {/* Direita: Slogan */}
      <div style={{ 
        textAlign: 'right', 
        fontWeight: '900', 
        fontSize: '11px', 
        color: '#ffffff',
        lineHeight: '1.1',
        fontFamily: 'sans-serif'
      }}>
        A GENTE<br />CUIDA<br />DO QUE É<br />NOSSO!
      </div>
    </header>
  )
}
