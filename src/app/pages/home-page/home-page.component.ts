import { Component, signal } from '@angular/core';
import { SlotsServiceService } from '../../core/services/slots-service.service';
import { CommonModule } from '@angular/common';
import { Providers } from '../../core/models/IProviders.model';
import { Slots } from '../../core/models/ISlots.model';
import { Category } from '../../core/models/ICategory.model';
import { SlotItemComponent } from '../../shared/components/slot-item/slot-item.component';
import { ToastrService } from 'ngx-toastr';
import { SELECTED_PROVIDER } from '../../core/constants';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BannerComponent } from '../../shared/components/banner/banner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SlotItemComponent, CommonModule, NgxSpinnerModule, BannerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  slotProviders = signal<Providers[]>([]);
  slots = signal<Slots[]>([]);
  showAllProviders = signal<boolean>(false);
  slotCategories = signal<Category[]>([]);

  constructor(
    private slotsService: SlotsServiceService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getProviders();
    this.getSlots(SELECTED_PROVIDER);
    this.getCategories();
  }

  getProviders() {
    this.spinner.show();
    this.slotsService.getProviders().subscribe((providers: Providers[]) => {
      this.slotProviders.set(providers);
      this.spinner.hide();
    });
  }

  getSlots(provider: string) {
    this.spinner.show();
    this.slotsService.getSlotsByProvider(provider).subscribe((res) => {
      this.slots.set(res.games);
      this.spinner.hide();
    });
  }

  getCategories() {
    this.spinner.show();
    this.slotsService.getDesktopCategories().subscribe((res) => {
      this.slotCategories.set(res);
      this.spinner.hide();
    });
  }

  toggleDrodown() {
    this.showAllProviders.set(!this.showAllProviders());
  }

  selectCategory(category: Category) {
    this.slots.set(category.games);
  }

  onPlayHandle(slot: Slots) {
    this.toastr.success('Play ' + slot.name);
  }
}
