import React from 'react'

import CostumerButton from './pageView/CostumerComponents/CostumerButton'
import { useNavigate } from 'react-router-dom';



export default function Costumer() {

    const navigate = useNavigate();

    return (

        <div>
            <div>Costumer</div>
            <CostumerButton />
        </div>


    )
}
