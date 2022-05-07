import { StyledTags, TagsContainer } from "./Styles"

export const Tags = ({ etiquetas }) => {
	return (
		<TagsContainer>
			{etiquetas.map((x) => (
				<StyledTags key={Math.random()}>{x}</StyledTags>
			))}
		</TagsContainer>
	)
}
