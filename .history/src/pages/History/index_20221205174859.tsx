import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <td>Tarefas</td>
            <td>28 minutos</td>
            <td>Há 2 meses</td>
            <td>Concluído</td>
          </tbody>
          <tbody>
            <td>Tarefas</td>
            <td>28 minutos</td>
            <td>Há 2 meses</td>
            <td>Concluído</td>
          </tbody>
          <tbody>
            <td>Tarefas</td>
            <td>28 minutos</td>
            <td>Há 2 meses</td>
            <td>Concluído</td>
          </tbody>
          <tbody>
            <td>Tarefas</td>
            <td>28 minutos</td>
            <td>Há 2 meses</td>
            <td>Concluído</td>
          </tbody>
          <tbody>
            <td>Tarefas</td>
            <td>28 minutos</td>
            <td>Há 2 meses</td>
            <td>Concluído</td>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluído</td>
            </tr>
          </tbody>
          <tbody>
            <td>Tarefas</td>
            <td>28 minutos</td>
            <td>Há 2 meses</td>
            <td>Concluído</td>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
