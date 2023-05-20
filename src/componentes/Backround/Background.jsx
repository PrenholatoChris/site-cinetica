import 'animate.css'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Background (){
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
       // await console.log(container);
    }, []);

    return (
        <Particles id="tsparticles"  init={particlesInit} loaded={particlesLoaded} 
        options={{
            "background": {
              "color": {
                "value": "#00000",
              },
            },
            "fpsLimit": 60,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": false,
                  "mode": "push",
                },
                "onHover": {
                  "enable": true,
                  "mode": "repulse",
                },
                "resize": true,
              },
              "modes": {
                "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 4,
                },
                "push": {
                  "quantity": 4,
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                },
              },
            },
            "particles": {
              "color": {
                "value": "#780707",
              },
              "links": {
                "color": "#780707",
                "distance": 200,
                "enable": true,
                "opacity": 0.5,
                "width": 1,
              },
              "collisions": {
                "enable": true,
              },
              "move": {
                "direction": "none",
                "enable": true,
                "outMode": "bounce",
                "random": false,
                "speed": 2,
                "straight": false,
              },
              "number": {
                "density": {
                  "enable": true,
                  "value_area": 800,
                },
                "value": 50,
              },
              "opacity": {
                "value": 0.5,
              },
              "shape": {
                "type": "circle",
              },
              "size": {
                // "random": true,
                "value": 1,
              },
              
            },
            "detectRetina": true,
          }}/>
    );
};