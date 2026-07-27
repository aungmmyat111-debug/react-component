import React from 'react'

export default function DisplayCard({ pageName }) {
  return (
    <div 
      style={{
        width: '250px',
        height: '250px',
        backgroundColor: 'white',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        color: '#333'
      }}
    >
      {pageName} Page
    </div>
  )
}