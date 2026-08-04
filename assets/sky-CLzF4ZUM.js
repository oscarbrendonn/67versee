var e=2064342,t=12576507;function n(n,r=300){let i=new n.ShaderMaterial({side:n.BackSide,depthWrite:!1,fog:!1,uniforms:{top:{value:new n.Color(e)},bottom:{value:new n.Color(t)}},vertexShader:`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,fragmentShader:`
  uniform vec3 top; uniform vec3 bottom;
  varying vec3 vDir;
  void main() {
    float h = clamp(vDir.y * 1.3 + 0.28, 0.0, 1.0);
    gl_FragColor = vec4(mix(bottom, top, pow(h, 0.78)), 1.0);
  }`}),a=new n.Mesh(new n.SphereGeometry(r,24,16),i);return a.name=`atmosphere:sky-dome`,a.userData.perfGroup=`sky`,a}function r(e,{count:t=96,seed:n=20260801,layout:r=`radial`,y:i=-22,yJitter:a=12,radius:o=96,innerRadius:s=18,length:c=210,startZ:l=14,halfWidth:u=66,opacity:d=.9}={}){let f=n>>>0,p=()=>(f=(f*1664525+1013904223)%4294967296,f/4294967296),m=new e.InstancedMesh(new e.SphereGeometry(1,8,6),new e.MeshStandardMaterial({color:16777215,roughness:.95,metalness:0,transparent:!0,opacity:d,depthWrite:!1}),t),h=new e.Matrix4,g=new e.Vector3,_=new e.Quaternion,v=new e.Vector3;for(let e=0;e<t;e+=1){let n=5+p()*10;if(r===`corridor`)g.set((p()-.5)*u*2,i-p()*a,l-e/t*c+(p()-.5)*8);else{let e=p()*Math.PI*2,t=s+p()*(o-s);g.set(Math.cos(e)*t,i-p()*a,Math.sin(e)*t)}h.compose(g,_,v.set(n,n*.41,n*.8)),m.setMatrixAt(e,h)}return m.instanceMatrix.needsUpdate=!0,m.castShadow=!1,m.receiveShadow=!1,m.renderOrder=-1,m.name=`atmosphere:cloud-sea`,m.userData.perfGroup=`sky`,m}export{n as i,t as n,r,e as t};