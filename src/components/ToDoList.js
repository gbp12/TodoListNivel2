import { EstateChanger } from "./EstateChanger"
import { Card, StyledList } from "./Styles"
import { Tags } from "./Tags"

//Componente que muestra las tareas hechas, recibe el estado y su setter para pasarlo al hijo.
//Este componente tiene un condicional para filtrar las acciones hechas de las que hay que hacer
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
