import { SimpleGit, simpleGit } from 'simple-git';
import triggers from './.gittrigger.json';
import { ConfigRepo } from './domain/entities/ConfigRepo.entity';


const configs: ConfigRepo[] = triggers.repos;


(async ()=>{
    const git: SimpleGit = simpleGit(process.cwd(), { binary: 'git' });
    const fetchRes = await git.fetch()
    console.log("Hola", triggers, fetchRes)

})();