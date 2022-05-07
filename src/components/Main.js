import { StyledLink } from "./Styles"
import { Opciones } from "./Styles"
import { Header } from "./Header"

//Este componente mantiene el header y las opciones de navegacion mostradas en todo momento, y linkea las partes de la aplicacion
//por las que podemos navegar
export const Main = () => {
	return (
		<>
			<Header />

			<Opciones>
				<StyledLink to={"/"}>Formulario</StyledLink>
				<StyledLink to={"/ToDoList"}> To-Do</StyledLink>
				<StyledLink to={"/DoneList"}>Done</StyledLink>
			</Opciones>
		</>
	)
}
