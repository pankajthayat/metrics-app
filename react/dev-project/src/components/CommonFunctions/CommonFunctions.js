
let month = new Map();
month.set(1, "January");
month.set(2, "February");
month.set(3, "March");
month.set(4, "April");
month.set(5, "May");
month.set(6, "June");
month.set(7, "July");
month.set(8, "August");
month.set(9, "September");
month.set(10, "October");
month.set(11, "November");
month.set(12, "December");

let year=new Map();
for(let i=1;i<13;i++)
{
    year.set(i,2013+i);
}


 export const getMonthId=(monthName)=>
 {
     for(let i=1;i<month.size+1;i++)
     {
         if(monthName==month.get(i))
         return i;
     }
 }

 export const getMonthName=monthId=>month.get(Number(monthId))
 

 export const getYearId=(yearValue)=>{
     for(let i=1;i<year.size+1;i++)
     {
         if(yearValue==year.get(i))
         return i;
     }

 }

 export const getYearById=yearId=>year.get(Number(yearId))
 

 export const getMonthMap=()=>month;

 export const getYearMap=()=>year;