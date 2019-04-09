import { Component} from '@angular/core';
import { TransformService } from './transform.service';
 
@Component({
    selector: 'DropOutHintTransform',
    templateUrl: './DropOutHintTransform.component.html',
    styleUrls: ['./DropOutHintTransform.component.css']
})
export class DropOutHintComponent {
    public condition: boolean;
    constructor(private transformService: TransformService) {
        this.condition = false;
        this.transformService.dropHintEmitter.subscribe((result: boolean) => {
        if (result) {
            setTimeout(() => {
                this.condition = true;
                }, 1000);
            setTimeout(() => {
                this.condition = false;
                }, 3000);
        }
        })
    }  
}