import type * as types from 'notion-types'
import cs from 'classnames'
import * as React from 'react'
import { Breadcrumbs, Search } from 'react-notion-x'

import { isSearchEnabled } from '@/lib/config'
import { MoonIcon } from '@/lib/icons/moon'
import { SunIcon } from '@/lib/icons/sun'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

function ToggleThemeButton() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <MoonIcon /> : <SunIcon />}
    </div>
  )
}

export const NotionPageHeader = ({
  block,
  activeSection
}: {
  block: types.PageBlock
  activeSection?: string
}) => {
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
        fontSize: '20px',
        fontWeight: '900',
        textTransform: 'uppercase'
      }}>
        <Breadcrumbs block={block} activeSection={activeSection} />
      </div>

      {/* Direita: Busca, Tema e Slogan */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {isSearchEnabled && <Search block={block} />}
        <ToggleThemeButton />
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
      </div>
    </header>
  )
}
