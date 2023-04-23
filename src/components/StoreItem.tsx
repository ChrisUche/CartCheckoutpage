import { Card} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"


type StoreItemProps  = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }:StoreItemProps) {
    return (
        <Card>
            <Card.Img src={imgUrl}  className=" h-52 w-fit- rounded-sm object-cover"/>
            <Card.Body className="flex flex-col   mb-4">
                <Card.Title className="flex justify-between align-baseline mb-4 ">
                    <span className="font-semibold">{name}</span> 
                    <span className="ms-2 opacity-90">{formatCurrency (price) }</span> 
                </Card.Title>
                
            </Card.Body>
      
        </Card>
    )
}