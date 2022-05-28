var sudoku=[[],[],[],[],[],[],[],[],[]]

function createGrid()
{



var myContainer = document.getElementById('container')

//var myInput = document.createElement('input')

//myContainer.appendChild(myInput)


for(var i=0;i<9;i++)
{
   
for(var j=0;j<9;j++)
{
console.log(i,j)
    var myInput = document.createElement('input');
    myInput.id=`${i}${j}`
    var number= Math.ceil(Math.random()*9);

    //myInput.value=number;

    myInput.row=i

    myInput.col=j

    //fix repetation

   if(isSafe(sudoku, i, j, number))
{

myInput.value=number
myInput.readOnly=true

}

else{

number=0
myInput.value=''


}

sudoku[i][j]=number;


myContainer.appendChild(myInput);


myInput.oninput=function(e){

    checkAnswer(sudoku,e)



}


}

}

console.log('sudoku:',sudoku);

}
createGrid()
//isSafe(sudoku, i, j, number)
function isSafe(grid, row, col, num)
{



for(var x=0;x<9;x++)
{

    if(grid[row][x]==num)
    {
      
        return false
    }
}

for(var y=0;y<9;y++)
{
    if(grid[y][col]==num)
    {
        return false
    }
}


var startRow=row-(row%3)
var startCol=col-(col%3)

for(var m=0;m<3;m++){

    for(var n=0;n<3;n++)
    
    {
        if(grid[m+startRow][n+startCol]==num){
           
            return false

        }
    
}

}

return true


}
function checkAnswer(grid, e){
    var row=e.target.row
    
    var col=e.target.col

    var num=Number(e.data)

    var id=e.target.id

    if(num=='')
    {
        return false
    }
    for(var x=0;x<9;x++)
    {
      if(grid[row][x]==num)
      {
          showColors('red',id)

          return false
      }

    }
    for(var y=0;y<9;y++)
    {
      if(grid[y][col]==num)
      {
          showColors('red',id)

          return false
      }

    }
    var startRow=row-(row%3)
var startCol=col-(col%3)

for(var m=0;m<3;m++){

    for(var n=0;n<3;n++)
    
    {
        if(grid[m+startRow][n+startCol]==num){
            showColors('red',id)
            return false

        }
    
}

}
showColors('green',id)
    return true 

}


function showColors(color,id)
{
    var inp=document.getElementById(id)
    if(color=='red')
    {
      inp.style.backgroundColor='red'
    }
    else{
        inp.style.backgroundColor='green'
    }

}