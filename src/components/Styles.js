import styled from "styled-components"
import { Field, Form } from "formik"
import { Link } from "react-router-dom"

//Estilos gestionados por styled-components

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #00476e;
	color: #fff;
	@media (max-width: 800px) {
		font-size: 70%;
	}
`
export const Opciones = styled.header`
	position: fixed;
	display: flex;
	height: 90vh;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	right: 2%;
	background-color: #2d4c5c;
	border-radius: 10px;
	padding: 10px;
	bottom: 25%;
	height: 50vh;
	@media (max-width: 800px) {
		bottom: 5%;
	}
`

export const StyledField = styled(Field)`
	padding: 20px;
	border: solid 3px #00476e;
	border-radius: 20px;
	font-size: 1.2em;
	width: 35%;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	width: 100%;
	text-align: center;
	color: #fff;
	border: solid 2px #fff;
	border-radius: 5px;
	font-size: 1.3em;
`

export const StyledButton = styled.button`
	margin-top: 20px;
	border-radius: 20px;
	padding: 10px 15px 10px 15px;
	cursor: pointer;
	color: #fff;
	background-color: #00476e;
	border: none;
	font-size: 1.3em;
`

export const StyledList = styled.div`
	background-color: azure;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 800px) {
		align-items: start;
	}
`
export const ButtonEstate = styled.button`
	font-size: 1.1em;
	padding: 20px;
	border: solid 1px greenyellow;
	:hover {
		background-color: greenyellow;
		cursor: pointer;
	}
`

export const Card = styled.div`
	width: 400px;
	padding: 20px;
	border: solid 3px #00476e;
	background-color: #dedede;
	font-family: "Courier New", Courier, monospace;
	margin-top: 1%;
	margin-bottom: 1%;

	@media (max-width: 800px) {
		width: 200px;
	}
`

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin-top: 10%;
`

export const StyledTags = styled.p`
	padding: 5px;
	background-color: #00476e;
	color: #fff;
	border-radius: 5px;
`
export const TagsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`
