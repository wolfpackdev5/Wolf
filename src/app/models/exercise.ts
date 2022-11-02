export class Exercise {
    id!: string;
    muscles!: string[];
    tutorial!: string;
    
    public Exercise() {
        this.id = '';
        this.muscles = [];
        this.tutorial = '';
    }
}