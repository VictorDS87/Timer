import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }}
`