import { useState } from 'react';

function Item({ item }) {
	const { id, conteudo, feito } = item;

	const [marcar, setFeito] = useState(feito);

	return (
		<div>
			<span style={{ textDecoration: marcar ? 'line-through' : '' }}>
				{id} - {conteudo}
			</span>
			<button onClick={() => setFeito(!marcar)}>
				{marcar ? 'Desmarcar' : 'Marcar'}
			</button>
		</div>
	);
}

export default Item;
