import { Notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const successNotification = (message: string) => {
    Notifications.show({
        title: "Success",
        icon: <IconCheck />,
        message: message,
        color: 'teal',
        withCloseButton: true,
        withBorder: true,
        // className:'!bg-green-500',
    });
}

const errorNotification = (message: string) => {
    Notifications.show({
        title: "Error",
        icon: <IconX />,
        message: message,
        color: 'red',
        withCloseButton: true,
        withBorder: true,
        // className:'!bg-red-500',
    });
}

export { successNotification, errorNotification };