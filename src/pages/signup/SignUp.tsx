import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { SignUpForm } from '../../components/features/signup/SignUpForm'
import { FormValues } from '../../interfaces/Interfaces'

export const SignUp = () => {
  const navigate = useNavigate()

  //тут создать пользователя, сохранить токен в localStorage и перенаправить на '/'
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
          onBottomTextClick={() => navigate('/login')}
        />

        {/* затычка для простоты перемещения между страницами, потом - убрать */}
        <Link
          to="/"
          className="bg-button-bg hover:bg-button-hover cursor-pointer text-button-text font-lato p-3 rounded-[12px] transition text-body"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}
