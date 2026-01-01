
import { ActionIcon, Button } from '@mantine/core'
import { IconBellRinging, IconLayoutSidebarLeftCollapse } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeJwt } from '../../Slices/JwtSlice'
import { removeUser } from '../../Slices/UserSlice'
import ProfileMenu from './ProfileMenu'

const Header = () => {
  const jwt = useSelector((state: any) => state.jwt);
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(removeJwt());
    dispatch(removeUser());
  }

  return (
    <div className='bg-light shadow-lg w-full h-16 flex justify-between items-center px-4'>
      <ActionIcon variant="transparent" size='lg' aria-label="Settings">
        <IconLayoutSidebarLeftCollapse style={{ width: '90%', height: '90%' }} stroke={1.5} />
      </ActionIcon>

      <div className='flex gap-5 items-center'>
        {jwt ?<Button color='red' onClick={handleLogout}>Logout</Button>:<Link to="Login"><Button>Login</Button></Link>}
        {jwt && <> <ActionIcon variant="transparent" size='md' aria-label="Settings">
          <IconBellRinging style={{ width: '90%', height: '90%' }} stroke={2} />
        </ActionIcon>
        <ProfileMenu /> </>}
      </div>
    </div>
  )
}

export default Header