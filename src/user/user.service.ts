import { Get, HttpService, Injectable, Param } from '@nestjs/common';
import { CreateUserDto, EditUserDto } from './dtos';


@Injectable()
export class UserService {

    constructor(private httpClient: HttpService) { }



    getMany(): Promise<any> {

        const data = this.httpClient.get('https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts', {
            method: 'GET',
            auth: { username: 'ICXCandidate', password: 'Welcome2021' },
            // url:'/services/rest/connect/v1.3/contacts',
            // baseURL:'https://imaginecx--tst2.custhelp.com',
            // headers:{"OSvC-CREST-Application-Context:Accounts metadata"}
            headers:{
                
            }
                
             }).toPromise();
    
        console.log(data)
        return data;

    }

    
    creteOne(dto: CreateUserDto) {
        const data = this.httpClient.post('https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts', {
            method:'POST',
            auth: { username: 'ICXCandidate', password: 'Welcome2021' }
        });

        return "usuario" + " " + dto.name + " " + "Creado con Exito"
    }

    getOne(id: number) {
        const data = this.httpClient.get('https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts/${id}', {
            method: 'GET',
            params: id,
            auth: { username: 'ICXCandidate', password: 'Welcome2021' }
        });
        console.log(id)
        return "Usuario Cargado Con exito" + JSON.stringify(data);
    }
    editOne(id: number, dto: EditUserDto) {
        return "Usuario Editado con Exito"
    }
    deleteOne(id: number) {
        return "Usuario Eliminado con Exito"
    }




}
