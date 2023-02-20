import { Play } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  CountdownContainer,
  HomeContainer,
  FormContainer,
  Separator,
  StartCountdownButton,
  MinuteAmountInput,
  TaskInput,
} from './styles'

interface NewCycleFormData {
  task: string
  minuteAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    defaultValues: {
      task: '',
      minuteAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minuteAmount,
    }

    setCycles((state) => [...state, newCycle])

    reset()
  }

  const task = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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
            {...register('minuteAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={!task} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
