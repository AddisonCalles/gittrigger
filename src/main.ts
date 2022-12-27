import { SimpleGit, simpleGit } from 'simple-git';
import triggers from './.gittrigger.json';
import { TriggerSetting  } from './domain/entities/ConfigRepo.entity';


//const configs: TriggerSetting[] = triggers.trigger;


(async ()=>{
    //Pequeño cambio
    const git: SimpleGit = simpleGit(process.cwd(), { binary: 'git' });
    const fetchRes = await git.fetch()
    console.log("Hola", triggers, fetchRes)

})();