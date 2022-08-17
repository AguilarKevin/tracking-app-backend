import { IsString, IsDefined, IsOptional } from "class-validator";
import "./";

export class User {
    @IsDefined()
    @IsString()
    id!: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsDefined()
    @IsString()
    email!: string;

    @IsDefined()
    @IsString()
    password!: string;
}
