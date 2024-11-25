import { generateurClasse } from '../classeDynamique';
import dotenv from 'dotenv';

dotenv.config();

describe('Genération de classes par réflexion', () => {
    const CLASS_NAME = process.env.CLASS_NAME || 'DefaultClass';
    const typeClasse: any = generateurClasse(CLASS_NAME);


    it('devrait créer une classe dynamique avec le nom de la variable d`environnement', () => {
        const instance: any = new typeClasse();
        Object.defineProperty(instance, 'nom', { value: CLASS_NAME });
        console.log(instance.nom);
        expect(instance.nom).toBe(CLASS_NAME);
    });

    it('devrait créer une classe dynamique avec une methode qui envoie un salut', () => {
        const instance: any = new typeClasse();
        Object.defineProperty(instance, 'saluer', { value: () => `La classe ${CLASS_NAME} vous faire dire salut!` });
        console.log(instance.saluer());
        expect(instance.saluer()).toBe(`La classe ${CLASS_NAME} vous faire dire salut!`);
    });
});
