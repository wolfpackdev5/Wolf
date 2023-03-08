export class User {
    email!: string;
    password!: string;
    givenName!: string;
    familyName!: string;
    code!: string;
    showPassword!: boolean;
}
//make sure that changing user from an interface didnt bring cognito service 