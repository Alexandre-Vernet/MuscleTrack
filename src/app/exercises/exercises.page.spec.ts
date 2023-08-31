import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ExercisesPage } from './exercises.page';

describe('Tab1Page', () => {
    let component: ExercisesPage;
    let fixture: ComponentFixture<ExercisesPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExercisesPage],
            imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ExercisesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
