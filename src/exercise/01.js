// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
const loadGlobe = () => import(/* webpackPrefetch: true */'../globe');
const Globe = React.lazy(loadGlobe)

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
		
      <label onMouseEnter={loadGlobe} onFocus={loadGlobe}  style={{marginBottom: '1rem'}}>
        <input
					type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
			<React.Suspense fallback={<div>loading...</div>}>
				<div style={{width: 400, height: 400}}>
					{showGlobe ? <Globe />: null}
				</div>
			</React.Suspense>
    </div>
  )
}

export default App
