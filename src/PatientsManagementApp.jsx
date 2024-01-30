import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouter } from './router/AppRouter'

export const PatientsManagementApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </>
  )
}
