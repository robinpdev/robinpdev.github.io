<script>
    import { ShaderToyLite } from "$lib/libraries/shadertoy.js";
    import { onMount } from "svelte";

    onMount(() => {
        var a = `
    void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
        vec2 uv = fragCoord/iResolution.xy;
        vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
        fragColor = vec4(col,1.0);
    }
    `;
        var image = `
        // V-Drop - Del 19/11/2019 - (Tunnel mix - Enjoy)
// vertical version: https://www.shadertoy.com/view/tdGXWm
#define PI 3.14159

float vDrop(vec2 uv,float t)
{
    uv.x = uv.x*128.0;						// H-Count
    float dx = fract(uv.x);
    uv.x = floor(uv.x);
    uv.y *= 0.05;							// stretch
    float o=sin(uv.x*215.4);				// offset
    float s=cos(uv.x*33.1)*.3 +.7;			// speed
    float trail = mix(95.0,35.0,s);			// trail length
    float yv = fract(uv.y + t*s + o) * trail;
    yv = 1.0/yv;
    yv = smoothstep(0.0,1.0,yv*yv);
    yv = sin(yv*PI)*(s*5.0);
    float d2 = sin(dx*PI);
    return yv*(d2*d2);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = (fragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    float d = length(p)+exp(-iTime)*0.9+0.1;
	p = vec2(atan(p.x, p.y) / PI, 2.5 / d);
    if (iMouse.z>0.5)
    	p.y *= 0.5;
    float t =  iTime*0.4;
    vec3 col = vec3(1.55,0.65,.225) * vDrop(p,t);	// red
    col += vec3(0.55,0.75,1.225) * vDrop(p,t+0.33);	// blue
    col += vec3(0.45,1.15,0.425) * vDrop(p,t+0.66);	// green
	fragColor = vec4(col*(d*d), 1.0);
}

    `;
        var toy = new ShaderToyLite("myCanvas");
        toy.setCommon("");
        toy.setBufferA({ source: a });
        toy.setImage({ source: image, iChannel0: "A" });
        toy.play();
    });
</script>

<main>
    <canvas id="myCanvas"></canvas>
</main>

<style>
    main {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        /* z-index: -1; */
    }

    canvas {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
