//let and const - block scoped;
//var- function scoped;
let i='abc';//global scoped
{
    {
        {
           
            
        }
    }
}
console.log(i);
function hello(){
    {
        {
            var a='xyz';
        }
    }
}
console.log(a);