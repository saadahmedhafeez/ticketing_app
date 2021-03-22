import { AbstractControl, ValidationErrors } from "@angular/forms";



export class UsernameValidators {
    static cannotContainsSpace(contol: AbstractControl) : ValidationErrors | null {
        if ((contol.value as string).indexOf(' ') >=0)
            return { cannotContainsSpace: true}
        return null
    }
    static shouldBeUnique(contol: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            setTimeout(() => { //this is Asynchronous function ... non blocking call to server
                if (contol.value === 'saad')
                    resolve({ shouldBeUnique: true})
                else
                    resolve(null)
            }, 2000)
        }
        )
    }
}