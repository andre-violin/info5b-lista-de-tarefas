import { items } from '../../dados/memoria_local';
import Item from './Item';

function Lista() {
	return (
		<div>
			{items.map((item) => {
				return <Item key={item.id} item={item} />;
			})}
		</div>
	);
}

export default Lista;
