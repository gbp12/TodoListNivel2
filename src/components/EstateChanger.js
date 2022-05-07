import { ButtonEstate } from "./Styles"

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
