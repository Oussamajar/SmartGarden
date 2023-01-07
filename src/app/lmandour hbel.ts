import { Component, OnInit } from '@angular/core'; 
import { 
    AngularFireDatabase, 
    AngularFireList,
} from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { ESP32_Data } from './models';
@Component({ 
         selector: 'app-root', 
         templateUrl: 'app.component.html', 
         styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
   
    private historyRef: AngularFireList <#####>;
    public history?: ###### ;
    constructor(db: AngularFireDatabase) { 
    this.historyRef = db.list<######>('/history');
}
ngOnInit(): void { 
    this.######
    .snapshotChanges() 
    .pipe(map((changes) => changes.map((c) => ({ ...c.payload.val() })))) 
    .subscribe((data) => { 
    this.history=#### 
    });
}
}