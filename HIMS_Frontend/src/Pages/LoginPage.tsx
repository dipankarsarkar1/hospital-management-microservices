import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconHeartbeat } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../Service/UserService'
import { errorNotification, successNotification } from '../Utility/NotificationUtil'
import { useDispatch } from 'react-redux'
import { setJwt } from '../Slices/JwtSlice'
import { setUser } from '../Slices/UserSlice'
import {jwtDecode} from 'jwt-decode'

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
    const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value:any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value:any) => (!value? 'Password is required' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    loginUser(values)
      .then((_data) => {
        dispatch(setJwt(_data));
        dispatch(setUser(jwtDecode(_data)));
        successNotification("Login successful!");
       
      })
      .catch((error: any) => {
        console.error(error);
        errorNotification("Login failed. Please try again.");
      });
  };

    return (
        <div style={{ background: 'url("/bg.jpeg")' }} className='h-screen w-screen !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center'>
            <div className=' py-3 text-pink-500 flex gap-1 items-center'>
                <IconHeartbeat size={45} stroke={2.5} />
                <span className='font-heading font-semibold text-4xl'>Pulse</span>
            </div>
            <div className='w-[450px] backdrop-blur-md p-10 py-8'>
                <form onSubmit={form.onSubmit(handleSubmit)}
                className='flex flex-col gap-5 
                    [&_input]:placeholder:neutral-100 
                    [&_.mantine-Input-input]:!border-white 
                    focus-within:[&_.mantine-Input-input]:!border-pink-400 
                    [&_.mantine-Input-input]:!border 
                    [&_input]:!pl-2 
                    [&_svg]:!text-white
                    [&_input]:!text-white 
                    '
                     >
                    <div className='self-center font-medium font-heading text-white text-xl'>Login</div>
                    <TextInput
                        className='transition duration-30'
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Enter your email"
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Enter your password"
                        {...form.getInputProps('password')}
                    />
                    <Button type='submit' radius='md' size='md' color='pink'>Login</Button>
                    <div className='text-neutral-100 text-sm self-center'>Don't have an account? <Link to="/register" className='hover:underline hover:text-blue-400'>Register</Link></div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage