var wireCode = Object.keys(global).filter(x=>(typeof global[x] === 'number'))[0];
Bomb.CutTheWire(global[wireCode]);