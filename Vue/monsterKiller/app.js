function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHP: 100,
      monsterHP: 100,
      fireBallCD: 0,
      healingCD: 0,
      winner: null,
      logMessages: [],
      rounds: 0,
    };
  },
  computed: {
    monsterHPStyle() {
      if (this.monsterHP < 0) return { width: "0%" };
      return { width: this.monsterHP + "%" };
    },
    playerHPStyle() {
      if (this.playerHP < 0) return { width: "0%" };
      return { width: this.playerHP + "%" };
    },
    fireBallUseable() {
      return this.fireBallCD % 3 !== 0;
    },
    fireBallCDNum() {
      return this.fireBallCD % 3 != 0
        ? `(CD:${3 - (this.fireBallCD % 3)})`
        : "";
    },
    healingUseable() {
      return this.healingCD % 4 !== 0;
    },
    healingCDNum() {
      return this.healingCD % 4 != 0 ? `(CD:${4 - (this.healingCD % 4)})` : "";
    },
  },
  watch: {
    playerHP(value) {
      value <= 0 ? (this.winner = "monster") : null;
    },
    monsterHP(value) {
      if (value <= 0) {
        this.winner = "player";
      } else if (value <= 0 && this.playerHP <= 0) {
        this.winner = "monster";
      }
    },
  },
  methods: {
    hack() {
      if (this.fireBallCD % 3 != 0) this.fireBallCD++;
      if (this.healingCD % 4 != 0) this.healingCD++;

      const attackValue = getRandomNumber(10, 5);
      this.monsterHP -= attackValue;
      this.attackPlayer();
      this.addMessage("你", "player", "劈砍", "damage", attackValue);
    },
    attackPlayer() {
      const attackValue = getRandomNumber(15, 10);
      this.playerHP -= attackValue;
      this.addMessage("石膚巨魔", "monster", "捶擊", "damage", attackValue);
    },
    fireBall() {
      if (this.healingCD % 4 != 0) this.healingCD++;

      const attackValue = getRandomNumber(25, 10);
      this.monsterHP -= attackValue;
      this.attackPlayer();
      this.fireBallCD++;
      this.addMessage("你", "player", "火球術", "damage", attackValue);
    },
    healing() {
      if (this.fireBallCD % 3 != 0) this.fireBallCD++;

      this.playerHP += 20;
      if (this.playerHP > 100) this.playerHP = 100;
      this.healingCD++;
      this.addMessage("你", "player", "快速治療", "heal", 20);
    },
    flee() {
        this.winner = "monster";
        this.logMessages.unshift({flee: true});
    }, 
    restart() {
        this.playerHP = 100;
        this.monsterHP = 100;
        this.fireBallCD = 0;
        this.healingCD = 0;
        this.winner = null;
        this.logMessages = [];
        this.rounds = 0;
    },
    addMessage(actor, actorStyle, type, typeStyle, actValue) {
        if(actorStyle == "player") this.rounds++;
        this.logMessages.unshift({
            actor,
            actorStyle,
            type,
            typeStyle,
            actValue,
            round : this.rounds,
        });
       
    }
  },
});

app.mount("#game");
