import { Get, HttpService, Injectable } from '@nestjs/common';
import { match } from 'assert';
import { json, urlencoded } from 'body-parser';
import { url } from 'inspector';
import { config, Observable } from 'rxjs';
import { CreateUserDto, EditUserDto } from './dtos';


@Injectable()
export class UserService {

    constructor(private httpClient: HttpService) { }

    getmany():Promise<any> {

        const data = this.httpClient.get('https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts',{
            method:'GET',
            auth:{username:'ICXCandidate',password:'Welcome2021'}
        });
console.log(data)
        return;
    }
    creteOne(dto: CreateUserDto) {
        const data = this.httpClient.post('https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts',{
            // method:'POST',
            auth:{username:'ICXCandidate',password:'Welcome2021'}
        });

        return "usuario" + " " + dto.name + " " + "Creado con Exito"
    }

    getOne(id: number) {
        const data = this.httpClient.get('https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts/267',{
            method:'GET',
            auth:{username:'ICXCandidate',password:'Welcome2021'}
        });
        return "Usuario Cargado Con exito" + JSON.stringify(data) ;
    }
    editOne(id: number, dto: EditUserDto) {
        return "Usuario Editado con Exito"
    }
    deleteOne(id: number) {
        return "Usuario Eliminado con Exito"
    }




}
