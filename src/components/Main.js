import { StyledLink } from "./Styles"
import { Opciones } from "./Styles"
import { Header } from "./Header"
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
