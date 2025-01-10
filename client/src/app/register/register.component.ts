import { Component, inject, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  accountService = inject(AccountService);
  private toaster = inject(ToastrService);
  model: any = {};
  cancelRegister = output<boolean>();
  register() {
    this.accountService.register(this.model).subscribe({
      next: (response: any) => {
        console.log(response);
        this.cancel();
      },
      error: (error: any) => {
        this.toaster.error(error.error);
      }
    });
  }

  cancel() {
    console.log("test");
    this.cancelRegister.emit(false);
  }
}
