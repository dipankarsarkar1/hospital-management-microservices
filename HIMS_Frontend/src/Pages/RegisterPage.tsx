import { Button, PasswordInput, SegmentedControl, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconHeartbeat } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../Service/UserService';
import { errorNotification, successNotification } from '../Utility/NotificationUtil';

const RegisterPage = () => {
    const navigation = useNavigate();
    const form = useForm({
        initialValues: {
            role: 'PATIENT',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            name: (value: any) => (value ? null : 'Name is required'),
            email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value: string) => {
                if (!value) return 'Password is required';
                if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,15}$/.test(value)) {
                    return 'Password must be 8–15 chars with upper, lower & special character';
                }
                return null;
            },

            confirmPassword: (value: any, values: any) => (value !== values.password ? 'Passwords do not match' : null),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        registerUser(values)
            .then((data: any) => {
                console.log(data);
                successNotification("Registration successful!");
                navigation('/login');
            })
            .catch((error: any) => {
                console.error(error);
                errorNotification(error.response?.data?.errorMessage || "Registration failed!");
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
                    <SegmentedControl
                        fullWidth
                        size="md"
                        radius="md"
                        color='pink'
                        bg='none'
                        className='[&_*]:!text-white border border-white '
                        {...form.getInputProps('type')}
                        data={[{ label: 'patient', value: "PATIENT" }, { label: 'doctor', value: "DOCTOR" }, { label: 'admin', value: "ADMIN" },]} />;
                    <TextInput
                        className='transition duration-30'
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Enter your name"
                        {...form.getInputProps('name')}
                    />

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

                    <PasswordInput
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Enter your confirmPassword"
                        {...form.getInputProps('confirmPassword')}
                    />
                    <Button type='submit' radius='md' size='md' color='pink'>Register</Button>
                    <div className='text-neutral-100 text-sm self-center'> Have an account? <Link to="/login" className='hover:underline hover:text-blue-400'>Login</Link></div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage