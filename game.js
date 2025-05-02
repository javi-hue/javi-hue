const canvas=document.getElementById(´tetris´);
const context=canvas.getContext(´2d);
context.scale(20,20);

const matrix=(
  T:[[0,1,0],[1,1,1]],
  O:[[1,1],[1,1]],
  L:[[0,0,1],[1,1,1]],
  J:[[1,0,0],[1,1,1]],
  I:[[1,1,1,1]],
  S:[[0,1,1],[1,1,0]],
  Z:[[1,1,0],[0,1,1]],
  };

const colors = [null, '#FF0D72','#0DC2FF','#0DFF72','#F538FF','#FF8E0D','#FFE138','#3877FF'];

const arena=createMatrix(12,20);
const player={
  pos:{x:0,y:0},
  matrix:null,
  score:0,
}:

function createMatrix(w,h) {
  const m=[];
  while (h--) m.push(new Array(w).fill(0));
  return m;
}

function collide(arena, player){
  const [m,o]=[player.matrix,player.pos];
  for (let y=0; y<m.length;++y)
    for(let x=0;x<m.lenght;++x)
      if(m[y][x] && (arena[y+o.y] && arena[y+o,y][x+o.x])!==0)
        return:true;
  return:false;
}
