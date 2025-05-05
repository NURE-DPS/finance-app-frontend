import { useNavigate } from 'react-router-dom'
import { SignUpForm } from '../../components/features/signup/SignUpForm'
import { useLogIn } from '../../hooks/useLogIn'

export const LogIn = () => {
  const navigate = useNavigate()
  const { handleLogIn } = useLogIn()

  return (
    <div className="w-screen h-full min-h-full box-border flex items-center justify-center bg-bg">
      <div className="w-[480px]">
        <h1 className="text-display text-text-primary font-bold mb-6 font-montserrat text-center">
          Finance App
        </h1>

        <SignUpForm
          onSubmit={handleLogIn}
          showNameField={false}
          buttonText="Log In"
          bottomText="Don’t have an account?"
          onBottomTextClick={() => navigate('/signup')}
        />
      </div>
    </div>
  )
}
