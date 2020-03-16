import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleResTfulApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterSampleResTfulApplicationCoreModule } from 'app/core/core.module';
import { JhipsterSampleResTfulApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterSampleResTfulApplicationHomeModule } from './home/home.module';
import { JhipsterSampleResTfulApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleResTfulApplicationSharedModule,
    JhipsterSampleResTfulApplicationCoreModule,
    JhipsterSampleResTfulApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleResTfulApplicationEntityModule,
    JhipsterSampleResTfulApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleResTfulApplicationAppModule {}
