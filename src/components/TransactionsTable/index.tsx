import React, { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

const TransactionsTable: React.FC = () => {
	useEffect(() => {
		api.get("transactions").then((response) => console.log(response));
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Desenvolvimento de Site</td>
						<td className="deposit">R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>02/02/2022</td>
					</tr>
					<tr>
						<td>Desenvolvimento de Site</td>
						<td className="withdraw">-R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>02/02/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
};

export default TransactionsTable;
