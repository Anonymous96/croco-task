import { Component, signal } from '@angular/core';
import { SlotsServiceService } from '../../core/services/slots-service.service';
import { Category, Providers, Slots } from '../../core/models/slots.model';
import { SlotItemComponent } from '../../../stories/slot-item/slot-item.component';
import { CommonModule } from '@angular/common';

const SELECTED_PROVIDER = 'egt';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotItemComponent, CommonModule],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.css',
})
export class SlotsComponent {
  slotProviders = signal<Providers[]>([]);
  slots = signal<Slots[]>([]);
  showAllProviders = signal<boolean>(false);
  slotCategories: Category[] = [];

  constructor(private slotsService: SlotsServiceService) {}

  ngOnInit() {
    this.getProviders();
    this.getSlots(SELECTED_PROVIDER);
    this.getCategories();
  }

  getProviders() {
    this.slotsService.getProviders().subscribe((providers: Providers[]) => {
      this.slotProviders.set(providers);
    });
  }

  getSlots(provider: string) {
    this.slotsService.getSlotsByProvider(provider).subscribe((res) => {
      this.slots.set(res.games);
    });
  }

  getCategories() {
    this.slotsService.getCategories().subscribe((res) => {
      this.slotCategories = res.filter((item) => item.platform != 'mobile');
    });
  }

  toggleDrodown() {
    this.showAllProviders.set(!this.showAllProviders());
  }

  selectCategory(category: Category) {
    this.slots.set(category.games);
  }

  onPlayHandle(slot: Slots) {
    alert('Play ' + slot.name);
  }
}
