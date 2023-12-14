export class Exercise {
    name!: string;
    muscles!: string[];
    tutorial!: string;
    
    public Exercise() {
        this.name = '';
        this.muscles = [];
        this.tutorial = '';
    }
}