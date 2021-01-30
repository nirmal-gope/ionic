export class Task {
    // propriete : type = valeur

    // obligatoire
    id: number = Date.now();
    name: string;
    state = false;

    // Facultatif
    dueDate?: string;
    priority?: string;
}
