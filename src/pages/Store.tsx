import { Col, Row} from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"


export function Store() {
    return (
    <>
     <h1>Store</h1>
     <Row className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-3">
        {storeItems.map(item => (
            <Col key={item.id}>
            <StoreItem {...item}/>
            </Col>
        ))}
         
     </Row>
     </>
    )
}