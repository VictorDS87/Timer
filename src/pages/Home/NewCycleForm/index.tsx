import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../Index'
import { FormContainer, MinuteAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1"></option>
        <option value="projeto 1"></option>
        <option value="projeto 1"></option>
        <option value="projeto 1"></option>
      </datalist>

      <label htmlFor="minuteAmount">Durante</label>
      <MinuteAmountInput
        type="number"
        id="minuteAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minuteAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
