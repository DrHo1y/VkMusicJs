class VkMusic {
  mas = new Array()
  constructor(data) {
    this.NamesMusic = data
    this.AllMusic()
  }
  AllMusic() {
    let result = {
      id: "",
      actor: "",
      name : ""
    }
    for(let i = 0; i < this._length; i++) {
      let data = this.NamesMusic[i]
      console.log(data)
      result.id = i
      result.actor = data.children[0].innerText.replaceAll("\n", "").replace(/\s+/g, ' ').trim()
      result.name = data.children[1].innerText.replaceAll("\n", "").replace(/\s+/g, ' ').trim()
      this.mas[i] = result 
    }
    return this.mas
  }

  set NamesMusic(value) {
    this._NamesMusic = value
  }

  get NamesMusic() {
    return this._NamesMusic
  }

  NameMusicForId(id) {
    let res = this.Mass[id]
    return res
  }
}
let data = document.getElementsByClassName("audio_row__performer_title")
let test = new VkMusic(data)
test
