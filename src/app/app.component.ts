import { Component } from '@angular/core';
import {Level} from './Level.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  levels: Array<Level> = [
      new Level('Girlfriend', '../assets/lvl1.jpg', 'Ты встречался с этой 23-летней красоткой. Вы расстались из-за того, что 31 января ты поздравил её с днем рождения, на что она отреагировала фразой: "ВЧЕРА! Он был вчера, ебаный, ты, пидрила!"', '30011995', 'Верно! Точный день её рождения и есть пароль' ),
      new Level('Boss', '../assets/lvl2.jpg', 'Все, что тебе известно об этом ублюдке - это то, что он всегда КРИЧИТ и болеет за футбольный клуб Реал.', 'РЕАЛ', 'Верно! Название его любимого клуба с включенным капслоком!' ),
      new Level('Bro', '../assets/lvl3.jpg', 'Пора взломать твоего братуху, ты часто играешь с ним в дотку, там он подписывается как spawn. Еще ты не раз замечал как он восторгался сатаной и дьяволом ', 'spawn666', 'Верно! spawn666' ),
      new Level('Victory!', '../assets/victory.jpg', 'Поздравлямба!! Ты хакнул всех! Ты - hackerman! Жди новые задания, уже скоро! ', '', '' ),
    ];
  levelIndex: number;
  currentLevel: Level;
  currentMessage = '';
  showNext = false;
  pass = '';
  maxLevel: number;
  end = false;

  constructor() {
    this.levelIndex = 0;
    this.maxLevel = this.levels.length - 1;
    this.currentLevel = this.levels[this.levelIndex];
  }

    checkPassword() {
      if (this.pass !== this.currentLevel.password) {
        this.currentMessage = 'Неверный пароль, попробуйте еще раз.';
        this.pass = '';
      } else {
        this.currentMessage = this.currentLevel.answer;
        this.showNext = true;
      }
    }

    nextLevel() {
      this.showNext = false;
      this.pass = '';
      this.currentMessage = '';
      this.levelIndex++;
      this.currentLevel = this.levels[this.levelIndex];
      if (this.levelIndex === this.maxLevel) {
        this.end = true;
      }
    }

}
