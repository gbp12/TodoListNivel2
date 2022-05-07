import { StyledTags, TagsContainer } from "./Styles"

//Componente que gestiona las Tags de las acciones
export const Tags = ({ etiquetas }) => {
	return (
		<TagsContainer>
			{etiquetas.map((x) => (
				<StyledTags key={Math.random()}>{x}</StyledTags>
			))}
		</TagsContainer>
	)
}
