import { Component } from '@angular/core';
import {Level} from './Level.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  levels: Array<Level> = [
      new Level('Grandmother', '../assets/lvl0.jpg', 'У твоей бабули на клавиатуре только 6 клавиш: q 2 3 w 1 e', 'qwe123', 'Верно! qwe123!',
          ['Бабуля была ограничена в символах', 'Попробуй перебрать возможные комбинации', 'qwe123'] ),
      new Level('Captain Obvious', '../assets/lvl5.jpg', 'Его собаку зовут - собака, кота - кот, а сына он планирует назвать - сын', 'пароль', 'Верно! У этого парня плохо с фантазией!',
          ['Вникни в текст', 'Пароль придуман по принципу эхо', 'пароль'] ),
      new Level('Girlfriend', '../assets/lvl1.jpg', 'Ты встречался с этой 23-летней красоткой. Вы расстались из-за того, что 31 января ты поздравил её с днем рождения, на что она отреагировала фразой: "ВЧЕРА! Он был вчера, ебаный, ты, пидрила!"', '30011995', 'Верно! Точный день её рождения и есть пароль',
          ['Ей 23, в каком году она родилась?', 'Люди часто ставят др на пароль', 'Это её др, собирись!', '30011995'] ),
      new Level('Boss', '../assets/lvl2.jpg', 'Все, что тебе известно об этом ублюдке - это то, что он всегда КРИЧИТ, никогда не включает английскую раскладку на клавиатуре и болеет за футбольный клуб Реал.', 'РЕАЛ', 'Верно! Название его любимого клуба с включенным капслоком!',
          ['У людей часто что-то любимое на пароле', 'Почему кричит большими буквами?', 'РЕАЛ']),
      new Level('Bro', '../assets/lvl3.jpg', 'Пора взломать твоего братуху, ты часто играешь с ним в дотку, там он подписывается как spawn. Еще ты не раз замечал как он восторгался сатаной и дьяволом ', 'spawn666', 'Верно! spawn666',
          ['Это связано с его никнеймом', 'Какое число ассоциируют с нечестью?', 'Совмести ник и число дъявола', 'spawn666'] ),
      new Level('Victory!', '../assets/victory.jpg', 'Поздравлямба!! Ты хакнул всех! Ты - hackerman! Жди новые задания, уже скоро! ', '', '', [] ),
    ];
  stats = {attempts: 0, promts: 0, hacked: 0};
  levelIndex: number;
  promtIndex: number;
  currentLevel: Level;
  currentMessage = '';
  currentPromt = '';
  showNext = false;
  pass = '';
  maxLevel: number;
  end = false;

  constructor() {
    this.levelIndex = 0;
    this.promtIndex = 0;
    this.maxLevel = this.levels.length - 1;
    this.currentLevel = this.levels[this.levelIndex];
  }

    checkPassword() {
    this.stats.attempts++;
      if (this.pass !== this.currentLevel.password) {
        this.currentMessage = 'Неверный пароль, попробуйте еще раз.';
        this.pass = '';
      } else {
        this.currentMessage = this.currentLevel.answer;
        this.showNext = true;
        this.stats.hacked++;
      }
    }

    nextLevel() {
      this.showNext = false;
      this.pass = '';
      this.currentMessage = '';
      this.levelIndex++;
      this.currentLevel = this.levels[this.levelIndex];
      this.promtIndex = 0;
      this.currentPromt = '';
      if (this.levelIndex === this.maxLevel) {
        this.end = true;
      }
    }

    help() {
        if (this.promtIndex < this.currentLevel.promts.length) {
          this.stats.promts++;
          this.currentPromt = this.currentLevel.promts[this.promtIndex];
          this.promtIndex++;
        }
    }

}
