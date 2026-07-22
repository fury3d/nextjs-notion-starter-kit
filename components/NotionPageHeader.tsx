import type * as types from 'notion-types'
import * as React from 'react'
import { Breadcrumbs } from 'react-notion-x'

export function NotionPageHeader({
  block
}: {
  block: types.CollectionViewPageBlock | types.PageBlock
}) {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '12px 24px',
      backgroundColor: '#2f3438',
      borderBottom: '1px solid #3a3f42'
    }}>
      {/* Esquerda: Logo */}
      <img src="/vivaicon2.png" alt="Logo" style={{ height: '50px', objectFit: 'contain' }} />

      {/* Centro: Título Dinâmico */}
      <div style={{
        color: '#00E5C5',
        fontSize: '40px',
        fontWeight: '900',
        textTransform: 'uppercase'
      }}>
        <Breadcrumbs block={block} />
      </div>

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
