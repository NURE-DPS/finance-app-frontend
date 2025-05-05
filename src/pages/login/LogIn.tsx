import { useNavigate } from 'react-router-dom'
import { SignUpForm } from '../../components/features/signup/SignUpForm'
import { FormValues } from '../../interfaces/Interfaces'

export const LogIn = () => {
  const navigate = useNavigate()

  //тут получить токен по данным, которые ввел пользователь, сохранить токен в localStorage и перенаправить на '/'
  const onSubmit = (data: FormValues) => {
    console.log('User data:', data)
    //getToken/saveToken
    navigate('/')
  }

  return (
    <div className="w-screen h-full min-h-full box-border flex items-center justify-center bg-bg">
      <div className="w-[480px]">
        <h1 className="text-display text-text-primary font-bold mb-6 font-montserrat text-center">
          Finance App
        </h1>

        <SignUpForm
          onSubmit={onSubmit}
          showNameField={false}
          buttonText="Log In"
          bottomText="Don’t have an account?"
          onBottomTextClick={() => navigate('/signup')}
        />
      </div>
    </div>
  )
}
