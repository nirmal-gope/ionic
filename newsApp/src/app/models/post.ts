export class Post {
    id: number = Date.now();
    subtitle: string;
    title?: string;
    src: string;
    content?: string;
    dueDate?: string;
    priority?: string;
}