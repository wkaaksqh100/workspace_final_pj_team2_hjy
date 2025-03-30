import mock from "../resources/mock";

import React from "react";

import { Button, Container, Input, Table } from "rsuite";
import Column from "rsuite/esm/Table/TableColumn";
import { Cell, HeaderCell } from "rsuite-table";

const TableEx = () => {
	return (
		<Container>
			<Table
				height={400}
				data={mock}
				onRowClick={(rowData) => {
					console.log(rowData);
				}}
			>
				<Column width={60} align="center" fixed>
					<HeaderCell>Id</HeaderCell>
					<Cell dataKey="id" />
				</Column>

				<Column width={150}>
					<HeaderCell>First Name</HeaderCell>
					<Cell dataKey="firstName" />
				</Column>

				<Column width={150}>
					<HeaderCell>Last Name</HeaderCell>
					<Cell dataKey="lastName" />
				</Column>

				<Column width={100}>
					<HeaderCell>Gender</HeaderCell>
					<Cell dataKey="gender" />
				</Column>

				<Column width={100}>
					<HeaderCell>Age</HeaderCell>
					<Cell dataKey="age" />
				</Column>

				<Column width={150}>
					<HeaderCell>Postcode</HeaderCell>
					<Cell dataKey="postcode" />
				</Column>

				<Column width={300}>
					<HeaderCell>Email</HeaderCell>
					<Cell dataKey="email" />
				</Column>
				<Column width={80} fixed="right">
					<HeaderCell>...</HeaderCell>

					<Cell style={{ padding: "6px" }}>
						<Input />
						{(rowData) => (
							<Button
								appearance="link"
								onClick={() => alert(`id:${rowData.id}`)}
							>
								Edit
							</Button>
						)}
					</Cell>
				</Column>
			</Table>
		</Container>
	);
};

export default TableEx;
