import { Avatar, Button, Divider, Paper, Table, Text } from '@mantine/core'
import { IconEdit } from '@tabler/icons-react';
import { useState } from 'react';
import { useSelector } from 'react-redux'

const Profile = () => {

    const userInfo = useSelector((state: any) => state.user);
    // const {edit, setEdit} = useState(false);
    const userInfos = {
        dob: "1996-08-14",
        phone: "9876543210",
        address: "Flat 302, Green Valley Apartments, MG Road, Bengaluru, Karnataka - 560001",
        aadharNo: "1234 5678 9012",
        bloodGroup: "O+",
        allergies: "Dust, Pollen",
        chronicDisease: "Hypertension"
    };

    return (
        <div className='p-10'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <Avatar variant='filled' src='/avter.jpg' size={200} alt='Its me' />
                    <div className='flex flex-col gap-3'>
                        <div className='text-3xl font-medium text-neutral-900'>{userInfo.name}</div>
                        <div className='text-xl text-neutral-700'>{userInfo.email}</div>
                    </div>
                </div>
                <Button size='lg' variant='filled' leftSection={<IconEdit />} >Edit</Button>
            </div>
            <Divider my={'xl'} />
            <div className="space-y-6">
                <div className="text-2xl font-medium text-neutral-900">
                    Personal Information
                </div>

                <Paper radius="lg" p="md">
                    <Table
                        striped
                        stripedColor='primary.1'
                        verticalSpacing="md"
                        highlightOnHover={false}
                        withTableBorder={false}
                        withColumnBorders={false}
                    >
                        <Table.Tbody>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Date of Birth</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="lg">{userInfos.dob}</Text>
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Phone</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="lg">{userInfos.phone}</Text>
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Aadhaar No</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="lg">{userInfos.aadharNo}</Text>
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Blood Group</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="lg">{userInfos.bloodGroup}</Text>
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Address</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="lg">{userInfos.address}</Text>
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Allergies</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="lg">{userInfos.allergies || '-'}</Text>
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Chronic Disease</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="lg">{userInfos.chronicDisease || '-'}</Text>
                                </Table.Td>
                            </Table.Tr>

                        </Table.Tbody>
                    </Table>
                </Paper>

            </div>


        </div>
    )
}

export default Profile