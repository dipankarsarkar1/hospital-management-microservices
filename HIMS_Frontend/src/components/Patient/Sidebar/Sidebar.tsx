import { Avatar, Text } from '@mantine/core'
import { IconCalendarCheck, IconHeartbeat, IconLayoutGrid, IconMoodHeart, IconStethoscope, IconUser, IconVaccine } from '@tabler/icons-react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const links = [
  {
    label: 'Dashboard',
    url: '/patient/dashboard',
    icons: <IconLayoutGrid stroke={1.5} />
  },
  {
    label: 'Profile',
    url: '/patient/profile',
    icons: <IconUser stroke={1.5} />
  },
  // {
  //   label: 'Doctors',
  //   url: '/patient/doctors',
  //   icons: <IconStethoscope stroke={1.5} />
  // },
  // {
  //   label: 'Patients',
  //   url: '/patient/patients',
  //   icons: <IconMoodHeart stroke={1.5} />
  // },
  {
    label: 'Appointments',
    url: '/patient/appointments',
    icons: <IconCalendarCheck stroke={1.5} />
  },
  // {
  //   label: 'Phermacy',
  //   url: '/patient/phermacy',
  //   icons: <IconVaccine stroke={1.5} />
  // }
]


const Sidebar = () => {
  
  const user = useSelector((state: any) => state.user);

  return (
    <div className='flex'>
      <div className='w-64'>
      </div>
    <div className='w-64 hide-scrollbar fixed  h-screen overflow-y-auto bg-dark flex flex-col gap-8 items-center'>
      <div className='fixed z-[500] py-3 bg-dark text-primary-400 flex gap-1 items-center'>
        <IconHeartbeat size={40} stroke={2.5} />
        <span className='font-heading font-semibold text-3xl'>Pulse</span>
      </div>
      <div className='flex flex-col gap-5 mt-20'>
        <div className='flex flex-col gap-1 items-center'>
          <div className='p-1 bg-white rounded-full shadow-lg'>
            <Avatar variant='filled' src='/avter.jpg' size='xl' alt='Its me' />
          </div>
          <span className='font-medium text-light'>{user?.name}</span>
          <Text c="dimmed" size="xs" className='text-light'>{user?.role}</Text>
        </div>
        <div className='flex flex-col gap-1 text-light'>
          {links.map((link) => {
            return <NavLink to={link.url} key={link.url}
              className={({ isActive }) => 'flex items-center gap-3 w-full font-medium text-nutral-900 px-4 py-5 rounded-lg ' + (isActive ? 'bg-primary-400 text-dark' : 'hover:bg-gray-100 hover:text-dark')}>
              {link.icons}
              <span>{link.label}</span>
            </NavLink>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar