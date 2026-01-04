import { ActionIcon, Avatar, Button, Divider, NumberInput, Paper, Select, Table, TagsInput, Text, TextInput } from '@mantine/core'
import { IconCamera, IconEdit } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux'
import { DateInput } from '@mantine/dates';
import { bloodGroups, departments, doctorSpecializations } from '../../../Data/DropDownData';


const Profile = () => {

    const userInfo = useSelector((state: any) => state.user);
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string | null>("/avatar.jpg");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    }
    const userInfos = {
        dob: "1996-08-14",
        phone: "9876543210",
        address: "Flat 302, Green Valley Apartments, MG Road, Bengaluru, Karnataka - 560001",
        licenseNo: "1234 5678 9012",
        specialization: "Cardiology",
        department: "Cardiology",
        totalExp: "8 years"
    };

    return (
        <div className='p-10'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    {/* <Avatar variant='filled' src='/avter.jpg' size={200} alt='Its me' /> */}
                    <div
                        style={{
                            position: "relative",
                            width: 140,
                            height: 140,
                        }}
                    >
                        <Avatar
                            src="/avter.jpg"
                            size={140}
                            radius="xl"
                            alt="Profile picture"
                        />

                      {edit && <ActionIcon
                            variant="filled"
                            radius="xl"
                            size="md"
                            style={{
                                position: "absolute",
                                bottom: 4,
                                right: 4,
                                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                                border: "2px solid white",
                            }}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <IconCamera size={16} />
                        </ActionIcon>}

                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            hidden
                            onChange={handleFileChange}
                        />
                    </div>



                    <div className='flex flex-col gap-3'>
                        <div className='text-3xl font-medium text-neutral-900'>{userInfo.name}</div>
                        <div className='text-xl text-neutral-700'>{userInfo.email}</div>
                    </div>
                </div>
                {!edit ? <Button size='lg' onClick={() => setEdit(true)} variant='filled' leftSection={<IconEdit />} >Edit</Button>
                    : <Button size='lg' onClick={() => setEdit(false)} variant='filled'  >Submit</Button>}

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
                                    {!edit ? <Text size="lg">{userInfos.dob}</Text> : <DateInput value={value} onChange={setValue} placeholder="Enter updated Date Of Birth" />}
                                </Table.Td>

                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Phone</Text>
                                </Table.Td>
                                <Table.Td>
                                    {!edit ? <Text size="lg">{userInfos.phone}</Text> : <NumberInput maxLength={10} clampBehavior='strict' hideControls placeholder="Enter updated Phone Number" />}
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">License No</Text>
                                </Table.Td>
                                <Table.Td>
                                    {!edit ? <Text size="lg">{userInfos.licenseNo}</Text> : <NumberInput maxLength={12} clampBehavior='strict' hideControls placeholder="Enter updated License Number" />}
                                </Table.Td>

                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Address</Text>
                                </Table.Td>
                                <Table.Td>
                                    {!edit ? <Text size="lg">{userInfos.address}</Text> : <TextInput placeholder="Enter updated Address" />}
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Specialization</Text>
                                </Table.Td>
                                <Table.Td>
                                    {!edit ? <Text size="lg">{userInfos.specialization || '-'}</Text> : <Select data={doctorSpecializations} placeholder="Enter updated Specialization and separeted by coma" />}
                                </Table.Td>
                            </Table.Tr>

                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Depertment</Text>
                                </Table.Td>
                                <Table.Td>
                                    {!edit ? <Text size="lg">{userInfos.department || '-'}</Text> : <Select data={departments} placeholder="Enter updated Department" />}
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text fw={600} size="lg">Total Experince</Text>
                                </Table.Td>
                                <Table.Td>
                                    {!edit ? <Text size="lg">{userInfos.totalExp || '-'}</Text> : <TagsInput placeholder="Enter updated Total Experience separeted by coma" />}
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