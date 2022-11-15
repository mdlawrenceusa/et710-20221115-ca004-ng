import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdMusicComponent } from './jd-music.component';

describe('JdMusicComponent', () => {
  let component: JdMusicComponent;
  let fixture: ComponentFixture<JdMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JdMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
