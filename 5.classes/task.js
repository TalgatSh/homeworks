class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;        
    }  
    fix() {
      this.state *= 1.5;
    }
    set _state(fixed) {
      if (this.state < 0) {
        this.state = 0;
      } if (this.state > 100) {
          this.state = 100;
        } else {
          this.state = fixed;
        }
    }
    get _state() {
      return this.state;
    }
}