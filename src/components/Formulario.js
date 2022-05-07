import { Formik } from "formik"
import { StyledField, StyledButton, StyledForm } from "./Styles"

//Formulario gestionado con formik, iniciamos los valores en strings vacias, damos formato adecuado a las Tags y concatenamos la nueva accion al estado global
export const Formulario = ({ Estado, setEstado }) => {
	return (
		<div>
			<Formik
				initialValues={{ titulo: "", tags: "", descripcion: "" }}
				onSubmit={(values) => {
					setEstado(
						Estado.concat({
							titulo: values.titulo,
							descripcion: values.descripcion,
							tags: values.tags.split(","),
							completado: false,
						})
					)
					alert(`Tarea ${values.titulo} añadida correctamente`)
				}}>
				<StyledForm>
					<StyledField name="titulo" type="text" placeholder="Titulo" required></StyledField>
					<StyledField name="tags" type="text" placeholder="Etiquetas separadas por comas" required></StyledField>
					<StyledField name="descripcion" type="text" placeholder="Breve descripción...." required></StyledField>
					<StyledButton type="submit">Enviar</StyledButton>
				</StyledForm>
			</Formik>
		</div>
	)
}
