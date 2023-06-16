import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TodoService } from './services/todo.service';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTaCrm3fTMvbTIwKX7-uYDdkxwgenjw3A",
  authDomain: "vuejs3-50356.firebaseapp.com",
  projectId: "vuejs3-50356",
  storageBucket: "vuejs3-50356.appspot.com",
  messagingSenderId: "76217019640",
  appId: "1:76217019640:web:5681edce6f2fc84c559f0d"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
