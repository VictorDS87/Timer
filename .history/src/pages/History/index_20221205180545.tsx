import { HistoryContainer, HistoryList, Status } from './styles'

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
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <Status>Concluído</Status>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <Status>Concluído</Status>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <Status>Concluído</Status>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <Status>Concluído</Status>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <Status>Concluído</Status>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <Status>Concluído</Status>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
