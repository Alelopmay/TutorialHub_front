import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './page/class/class.component';
import { MailboxComponent } from './page/mailbox/mailbox.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SeekerComponent } from './page/seeker/seeker.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { AuthguardService } from './service/authguard.service';


export const routes: Routes = [
    { path: 'class', component: ClassComponent, canActivate: [AuthguardService] },
    { path: 'seeker', component: SeekerComponent, canActivate: [AuthguardService] },
    { path: 'mailbox', component: MailboxComponent, canActivate: [AuthguardService] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthguardService] },
    { path: 'home', component: LoginComponent }, // Cambiado a 'home'
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }