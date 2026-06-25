import LightRays from './components/LightRays';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <div className="rays-wrapper">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.2}
          lightSpread={0.6}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.02}
          fadeDistance={1.2}
          saturation={0.8}
        />
      </div>
      <h1 className="headline">Launching Soon</h1>
    </div>
  );
}
