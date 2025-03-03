import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Counter } from '../components/counter/Counter'
import { CounterWithSettings } from '../components/counterWithSettings/CounterWithSettings'
import { Error } from '../pages/Error'
import "../components/theme/global.css"
import { Container } from '../components/container/Container'

export type CounterModeType = "primary" | "secondary"
export type ThemeModeType = "dark" | "light"

function App() {

  return (
    <Layout>
      <Container>
        <Routes>
          <Route path={"/"} element={<Navigate to={"/counter"} />}></Route>
          <Route path={"/counter"} element={<Counter />}></Route>
          <Route path={"/counterWithSettings"} element={<CounterWithSettings />}></Route>
          <Route path={"/error"} element={<Error />}></Route>
          <Route path={"/*"} element={<Navigate to={"/error"} />}></Route >
        </Routes>
      </Container>
    </Layout >
  )
}

export default App
