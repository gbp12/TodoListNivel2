import { EstateChanger } from "./EstateChanger"
import { StyledList } from "./Styles"
import { Card } from "./Styles"
import { Tags } from "./Tags"

//Componente que muestra las tareas por hacer, recibe el estado y su setter para pasarlo al hijo.
//Este componente tiene un condicional para filtrar las acciones hechas de las que hay que hacer
export const DoneList = ({ Estado, setEstado }) => {
	return (
		<StyledList>
			{Estado.map((x) => (
				<div key={Math.random()}>
					{x.completado == true ? (
						<Card>
							<h2>{x.titulo}</h2>
							<Tags etiquetas={x.tags} />

							<p>{x.descripcion}</p>

							<EstateChanger type={"To-Do"} Estado={Estado} setEstado={setEstado} index={Estado.indexOf(x)} />
						</Card>
					) : null}
				</div>
			))}
		</StyledList>
	)
}
