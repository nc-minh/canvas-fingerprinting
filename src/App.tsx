import fingerprintIcon from './assets/fingerprint-scan.png';
import './App.css';
import { useCanvasFingerprint } from './hooks/useCanvasFingerprint';

function App() {
  const data = useCanvasFingerprint();

  return (
    <>
      <div>
        <a
          href="https://github.com/nc-minh/canvas-fingerprinting"
          target="_blank"
        >
          <img src={fingerprintIcon} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Canvas Fingerprint</h1>
      <div className="card">
        <button>Your fingerprint is {data}</button>
      </div>
      <p className="read-the-docs">
        Click on the Fingerprint logo to visit my GitHub.
      </p>
    </>
  );
}

export default App;
