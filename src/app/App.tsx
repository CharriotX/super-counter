import { Navigate, Route, Routes } from 'react-router-dom'
import "@/common/theme/global.css"
import { Layout } from '@/common/components/layout/Layout'
import { Container } from '@/common/components/container/Container'
import { Counter } from '@/features/counter/ui/counter/Counter'
import { CounterWithSettings } from '@/features/counter/ui/counterWithSettings/CounterWithSettings'
import { Error } from '@/pages/Error'

export type CounterModeType = "primary" | "secondary"
export type ThemeModeType = "dark" | "light"

function App() {

  return (
    <Layout>
      <Container>
        <Routes>
          <Route path={"/"} element={<Navigate to={"/counterWithSettings"} />}></Route>
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
