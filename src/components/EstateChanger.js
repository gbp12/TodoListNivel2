import { ButtonEstate } from "./Styles"

//Este componente recibe el estado de la aplicacion, el setter, index de la accion concreta y el tipo (To-Do, Done)
//Al hacer click en el componente, este filtra las acciones, elimina la seleccionada, cambia su estado, la introduce de nuevo y setea el estado global
export const EstateChanger = ({ index, Estado, setEstado, type }) => {
	const cambiarEstado = () => {
		var nuevoArray = Estado.filter((x) => {
			return x !== Estado[index]
		})
		var nuevObjeto = Estado[index]
		nuevObjeto.completado = !nuevObjeto.completado

		nuevoArray.push(nuevObjeto)
		setEstado(nuevoArray)
	}
	return (
		<ButtonEstate
			onClick={() => {
				cambiarEstado()
			}}>
			{type}
		</ButtonEstate>
	)
}
