import { num, limitOfTx, setOfTx } from '../problem1';

function DynamicComponents(props){

    var newarr = new Array(num);
    
    for(var i=0;i<props.setOfTx.length;i++){
        
        for(var j=0;j<props.setOfTx[i].length;j++){
            newarr[i*10 + j] = setOfTx[i][j];
        }
        
    }


    console.log("the type of newarr is ",typeof(newarr));
    console.log(newarr);

    return(
        newarr.map((num) => <div>{num}</div>)
    );     
}
    

export default DynamicComponents;