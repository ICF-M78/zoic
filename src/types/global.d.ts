import { DialogApi, LoadingBarApi, MessageApi, NotificationApi } from 'naive-ui';

declare global {
    interface Window {
        $loadingBar: LoadingBarApi;
        $dialog: DialogApi;
        $message: MessageApi;
        $notification: NotificationApi;
    }
}
