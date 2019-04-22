import {Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {TabComponent} from './tabs/tab/tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smoogle';
  @Output() createComponent = new EventEmitter<string>();
  dynamicTabs: any[] = [];
  cmpRef: ComponentRef<TabComponent>;

  @ViewChild('dynamic', {read: ViewContainerRef}) vc: ViewContainerRef;

  constructor(private vcr: ViewContainerRef,
              private r: ComponentFactoryResolver) {
  }


  createTab() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    const factory = this.r.resolveComponentFactory(TabComponent);
    const componentRef = this.vc.createComponent(factory);
    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.title = 'New tab';

    this.dynamicTabs.push(componentRef.instance as TabComponent);
  }

}
