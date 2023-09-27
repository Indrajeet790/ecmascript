 let data = [1,2,3,4,5,6,7]
 let newE1 =70;
 let position =2;
 for(let i=data.length-1;i>=0; i--){
     if(i>=position){
         data[i+1]=data[i];
         if(i == position){
            data[i]=newE1;
         }
        }    
    }
    console.log(data);
