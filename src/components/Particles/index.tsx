import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const ParticlesContainer = (props: unknown) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {}, []);

  return (
    <Particles
      style={{
        bottom: 0,
        left: 0,
        objectFit: 'scale-down',
        objectPosition: '50% 0',
        position: 'fixed',
        zIndex: '1',
      }}
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          detectsOn: 'window',
        },
        particles: {
          color: {
            value: '#fefefe',
          },
          links: {
            color: '#dedede',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 240,
            },
            value: 48,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
