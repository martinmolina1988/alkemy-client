import React, { useEffect, useState } from 'react'
import { balance } from '../../../api/record'
import "./Balance.scss"
export default function Balance(props) {
    const {del}=props;
    const [amount, setAmount] = useState(0);
    const [amountNull, setAmountNull] = useState(false);
    const [nameClass,setNameClass ] = useState("");

    useEffect(async() => {

        await balance().then(result => {
           if(result?.data[0].balance !== null){
            setAmount(result?.data[0].balance);
            setAmountNull(true);
        }else{
            setAmountNull(false);

        }
        }
        )
        if(amount < 0){
            setNameClass("Red");
        }else{
            setNameClass("Green");
        }
    }, [del])


    return (
        <div >
{amountNull ? (<>
    <div className="margin"></div>

<div className="balance">

            <p className="balance__text">Balance: </p>
            <p className={`balance__amount${nameClass}`}> {amount }</p>
</div>
     </> ):(<>
     <div className="not-balance">

<h2>You have not made any transaction</h2>
<h2>Make your first transaction by pressing the following button</h2>
     </div>
     </> ) 
       }
        </div>
    )
}
