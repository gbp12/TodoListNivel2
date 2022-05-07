import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Main } from "../components/Main"
import { Formulario } from "../components/Formulario"
import { ToDoList } from "../components/ToDoList"
import { DoneList } from "../components/DoneList"
import { useState } from "react"
export const GeneralRouters = () => {
	const [Estado, setEstado] = useState([
		{ titulo: "titulo1", tags: ["uno", "dos", "tres"], descripcion: "tengo que hacer algo urgente", completado: false },
		{ titulo: "titulo2", tags: ["uno", "dos", "tres"], descripcion: "tengo que hacer algo urgente", completado: false },
		{ titulo: "titulo3", tags: ["uno", "dos", "tres"], descripcion: "tengo que hacer algo urgente", completado: false },
	])
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					path="/"
					element={
						<>
							<Main></Main>
							<Formulario Estado={Estado} setEstado={setEstado} />
						</>
					}
				/>
				<Route
					path="/ToDoList"
					element={
						<>
							<Main></Main>
							<ToDoList Estado={Estado} setEstado={setEstado} />
						</>
					}
				/>
				<Route
					path="/DoneList"
					element={
						<>
							<Main></Main>
							<DoneList Estado={Estado} setEstado={setEstado} />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
