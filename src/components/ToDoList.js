import { EstateChanger } from "./EstateChanger"
import { Card, StyledList, StyledTags } from "./Styles"
import { Tags } from "./Tags"
export const ToDoList = ({ Estado, setEstado }) => {
	return (
		<StyledList>
			{Estado.map((x) => (
				<div key={Math.random()}>
					{x.completado == false ? (
						<Card>
							<h2>{x.titulo}</h2>
							<Tags etiquetas={x.tags} />

							<p>{x.descripcion}</p>

							<EstateChanger type={"Done"} Estado={Estado} setEstado={setEstado} index={Estado.indexOf(x)} />
						</Card>
					) : null}
				</div>
			))}
		</StyledList>
	)
}
