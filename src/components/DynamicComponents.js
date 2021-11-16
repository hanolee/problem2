import { limitOfTx, setOfTx } from '../problem1';

function DynamicComponents(props){

    var newarr = new Array();
    
    for(var i=0;i<props.setOfTx.length;i++){
        newarr += setOfTx[i];
    }

    console.log(newarr);
    const arr = [1,2,3,4];

    return(
        <div>
            {newarr.map((num) => <div>{num}</div>)}
        </div>
        
    );
}

export default DynamicComponents;