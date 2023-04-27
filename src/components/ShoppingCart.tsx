import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

export function ShoppingCart() {
    return (
            <Drawer open={true} direction='right'>
                <div>Hello World</div>
            </Drawer>
    )
}